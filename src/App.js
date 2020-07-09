import React, { useEffect, useState, createRef } from "react";
import { Container, makeStyles } from "@material-ui/core";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { RoutesNotConnected } from "./routes/routes-notconnected";
import { RoutesConnected } from "./routes/routes-connected";
import { Navbar } from "./components/navbar/Navbar";
import { getSessionCookie, SessionContext } from "./context/session";
import { ability, defineRulesFor } from "./helpers/ability";
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
    padding: 20,
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
  const wrapper = createRef();

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
    <SessionContext.Provider value={contextValue} ref={wrapper}>
      <div className={classes.root}>
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
          <RoutesNotConnected />
        )}
      </div>
    </SessionContext.Provider>
  );
};

export default App;
