import React from "react";

import AppLogo from "./components/app-logo";
import Grid from "@material-ui/core/Grid";
import UnauthenticatedRoutes from "./routes/unauthenticated-routes";

function UnauthenticatedApp() {
  return (
    <section>
      <Grid container>
        <Grid item xs={6}>
          <AppLogo />
          <p>Welcome, ready ti share your best songs with your friend ?</p>
        </Grid>
        <Grid item xs={6}>
          <UnauthenticatedRoutes />
        </Grid>
      </Grid>
    </section>
  );
}

export default UnauthenticatedApp;
