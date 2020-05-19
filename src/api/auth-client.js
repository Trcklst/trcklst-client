import { client } from "./api-client";

import * as AuthService from "../services/auth-service";

function login({ email, password }) {
  return client("login", { body: { email, password }, method: "POST" }).then(
    AuthService.handleLoginResponse
  );
}

function register({ email, password }) {
  return client("register", { body: { email, password }, method: "POST" }).then(
    AuthService.handleLoginResponse
  );
}

function resetPassword({ newPassword }) {
  return client("reset-password", { body: { newPassword } }).then(
    (response) => response
  );
}

function confirmCodeResetPassword({ code }) {
  return client("reset-password", { body: { code } }).then(
    (response) => response
  );
}

function requestResetPasswordCode({ email }) {
  return client("request-reset-password-code", { body: { email } });
}

export { login, register, resetPassword };
