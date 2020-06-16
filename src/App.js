import React, { useEffect, useState, createRef } from "react";
import { Container, makeStyles } from "@material-ui/core";
import jwt_decode from "jwt-decode";

import { RoutesNotConnected } from "./routes/routes-notconnected";
import { RoutesConnected } from "./routes/routes-connected";
import { Navbar } from "./components/Navbar";
import { getSessionCookie, SessionContext } from "./context/session";
import { ability, defineRulesFor } from "./helpers/ability";
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
  const wrapper = createRef();

  useEffect(() => {
    if (getSessionCookie().token) {
      const currentAuth = jwt_decode(getSessionCookie().token);
      const temp = {
        ...currentAuth,
        id: parseInt(currentAuth.sub),
        role: "USER",
      };
      ability.update(defineRulesFor(temp));
    }
    return () => {
      setSession(getSessionCookie());
    };
  }, []);

  return (
    <SessionContext.Provider value={contextValue} ref={wrapper}>
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
