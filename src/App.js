import React, { useEffect, useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import jwt_decode from "jwt-decode";

import { RoutesNotConnected } from "./routes/routes-notconnected";
import { RoutesConnected } from "./routes/routes-connected";
import { Navbar } from "./components/Navbar";
import { getSessionCookie, SessionContext } from "./context/session";
import "./App.css";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    minHeight: "100vh",
  },
  content: {
    flexGrow: 1,
    position: "relative",
    height: "100%",
    overflow: "hidden",
  },
});

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

  useEffect(() => {
    if (getSessionCookie().token) {
      const currentAuth = jwt_decode(getSessionCookie().token);
      console.log("gestion des droits", currentAuth);
    }
    return () => {
      setSession(getSessionCookie());
    };
  }, []);

  return (
    <SessionContext.Provider value={contextValue}>
      {session.auth ? (
        <Container maxWidth={false} className={classes.container}>
          <Navbar />
          <section className={classes.content}>
            <RoutesConnected />
          </section>
        </Container>
      ) : (
        <RoutesNotConnected />
      )}
    </SessionContext.Provider>
  );
};

export default App;
