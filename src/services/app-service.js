import * as AuthService from "./auth-service";

async function bootstrapAppData() {
  let appData = { user: null };

  if (AuthService.isLoggedIn()) {
    appData.user = await Promise.all([AuthService.getUser()]);
  }

  return appData;
}

export { bootstrapAppData };
