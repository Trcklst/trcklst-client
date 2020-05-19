import React from "react";

import { useAuth } from "./context/auth-context";

import DashboardNavbar from "./components/dashboard/dashboard-navbar";
import DashboardSidebar from "./components/dashboard/dashboard-sidebar";
import AuthenticatedRoutes from "./routes/authenticated-routes";

function AuthenticatedApp() {
  const { user } = useAuth();
  return (
    <>
      <DashboardNavbar />
      <DashboardSidebar />
      <section>
        <AuthenticatedRoutes />
      </section>
    </>
  );
}

export default AuthenticatedApp;
