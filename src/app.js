import React from "react";

import { useAuth } from "./context/auth-context";

import SpinnerPage from "./pages/spinner-page";
import AuthenticatedApp from "./authenticated-app";
import UnauthenticatedApp from "./unauthenticated-app";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const { user } = useAuth();
  return (
    <>
      <CssBaseline />
      <React.Suspense fallback={<SpinnerPage />}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </React.Suspense>
    </>
  );
}

export default App;
