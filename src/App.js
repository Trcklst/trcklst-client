import React, { useEffect, useState, createRef } from "react";
import { Container } from "@material-ui/core";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useStyles } from "./useStyles";

import { RoutesNotConnected } from "./routes/routes-notconnected";
import { RoutesConnected } from "./routes/routes-connected";
import { Navbar } from "./components/Navbar/Navbar";
import { getSessionCookie, SessionContext } from "./context/session";
import { ability, defineRulesFor } from "./helpers/ability";
import "./App.css";

const App = () => {
  const classes = useStyles();
  const [session, setSession] = useState(getSessionCookie());
  const [user, setUser] = useState({});
  const contextValue = {
    session,
    setSession,
    user,
    setUser,
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
    </SessionContext.Provider>
  );
};

export default App;
