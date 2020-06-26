var base64 = require("base-64");

export const requests =
  process.env.NODE_ENV !== "production"
    ? {
        auth: (url) =>
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Basic ${base64.encode(`trcklst:secret`)}`,
            },
          }),
        get: (url) =>
          fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }),
        post: (url, body) =>
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }),
        put: (url, body) =>
          fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }),
        delete: (url) =>
          fetch(url, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }),
      }
    : {
        auth: (url) =>
          fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "Basic trcklst secret",
            },
          }),
        get: (url) =>
          fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }),
        post: (url, body) =>
          fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }),
        put: (url, body) =>
          fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }),
        delete: (url) =>
          fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }),
      };
