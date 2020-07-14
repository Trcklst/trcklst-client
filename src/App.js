import React, { useEffect, useState, createRef } from "react";
import { Container, makeStyles } from "@material-ui/core";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import fetchIntercept from "fetch-intercept";
import * as Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";

import { RoutesNotConnected } from "./routes/routes-notconnected";
import { RoutesConnected } from "./routes/routes-connected";
import { Navbar } from "./components/navbar/Navbar";
import { getSessionCookie, SessionContext } from "./context/session";
import { ability, defineRulesFor } from "./helpers/ability";
import { LOGIN } from "./helpers/route-constant";
import "./App.css";

export const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    flexGrow: 1,
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

const App = () => {
  const classes = useStyles();
  const [session, setSession] = useState(getSessionCookie());
  const [user, setUser] = useState({});
  const [socket, setSocket] = useState({});
  const contextValue = {
    session,
    setSession,
    user,
    setUser,
    socket,
    setSocket,
  };
  const { push } = useHistory();
  const wrapper = createRef();

  fetchIntercept.register({
    request: (url, config) => {
      if (!url.includes("oauth")) {
        config.headers = {
          "Content-Type": "application/json",
          Authorization: getSessionCookie().token,
        };
      }
      return [url, config];
    },
    requestError: (error) => {
      return Promise.reject(error);
    },
    response: async (response) => {
      if (response.status === 400 && session.auth) {
        const cloneResponse = await response.clone();
        const data = await cloneResponse.json();
        if (
          data.message === "No Token has been sent" ||
          data.message === "Invalid Token"
        ) {
          Cookies.remove("session");
          setSession({ ...session, auth: false, token: "" });
          push(LOGIN);
        }
      }
      return response;
    },
    responseError: (error) => {
      return Promise.reject(error);
    },
  });

  useEffect(() => {
    if (getSessionCookie().token) {
      const currentAuth = jwt_decode(getSessionCookie().token);
      ability.update(
        defineRulesFor({
          ...currentAuth,
          id: currentAuth.userId,
          role: currentAuth.authorities[0],
        })
      );
    }
    return () => {
      setSession(getSessionCookie());
    };
  }, []);

  return (
    <SessionContext.Provider value={contextValue}>
      <div className={classes.root} ref={wrapper}>
        <Navbar />
        {session.auth ? (
          <Container maxWidth={false} className={classes.container}>
            <section className={classes.content}>
              <RoutesConnected />
            </section>
            <ToastContainer
              enableMultiContainer
              position={toast.POSITION.BOTTOM_LEFT}
              containerId={"mainToast"}
            />
          </Container>
        ) : (
          <>
            <RoutesNotConnected />
            <ToastContainer
              enableMultiContainer
              position={toast.POSITION.BOTTOM_LEFT}
              containerId={"mainToast"}
            />
          </>
        )}
      </div>
    </SessionContext.Provider>
  );
};

export default App;
