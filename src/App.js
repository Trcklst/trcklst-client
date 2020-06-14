import React from "react";
import { Container, makeStyles } from "@material-ui/core";

import { Routes } from "./routes";
import { Navbar } from "./components/Navbar";
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

  return (
    <>
      <Container maxWidth={false} className={classes.container}>
        <Navbar />
        <section className={classes.content}>
          <Routes />
        </section>
      </Container>
    </>
  );
};

export default App;
