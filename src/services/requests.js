import { getSessionCookie } from "../context/session";
var base64 = require("base-64");

export const requests = {
  auth: (url) =>
    fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${base64.encode(`trcklst:secret`)}`,
      },
    }),
  get: (url) =>
    fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: getSessionCookie().token,
      },
    }),
  post: (url, body) =>
    fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getSessionCookie().token,
      },
      body: JSON.stringify(body),
    }),
  put: (url, body) =>
    fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getSessionCookie().token,
      },
      body: JSON.stringify(body),
    }),
  patch: (url, body) =>
    fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: getSessionCookie().token,
      },
      body: JSON.stringify(body),
    }),
  delete: (url) =>
    fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: getSessionCookie().token,
      },
    }),
};
