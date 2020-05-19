import { client } from "../api/api-client";

const localStorageKey = "__trcklst_token__";

function handleLoginResponse({ token, ...user }) {
  setToken(token);
  return user;
}

function getUser() {
  const token = getToken();
  if (!token) {
    return Promise.resolve(null);
  }
  return client("me", { method: "GET" }).then((userData) => userData);
}

function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

function setToken(token) {
  window.localStorage.setItem(localStorageKey, token);
}

function logout() {
  window.localStorage.removeItem(localStorageKey);
}

function isLoggedIn() {
  return Boolean(getToken());
}

export { getUser, getToken, setToken, logout, isLoggedIn, handleLoginResponse };
