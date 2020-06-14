import React from "react";

import { Footer } from "../Footer";
import { useStyles } from "./useStyles";

export const Homepage = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <section className={classes.heroImage}>
        <article className={classes.hero}>
          <h1 className={classes.title}>Trcklst</h1>
        </article>
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
};
