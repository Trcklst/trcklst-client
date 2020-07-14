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
    }),
  post: (url, body) =>
    fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  put: (url, body) =>
    fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: "PUT",
      body: JSON.stringify(body),
    }),
  patch: (url, body) =>
    fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),
  delete: (url) =>
    fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: "DELETE",
    }),
};
