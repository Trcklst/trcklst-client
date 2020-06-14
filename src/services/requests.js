export const requests =
  process.env.NODE_ENV !== "production"
    ? {
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
        delete: (url) =>
          fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            method: "DELETE",
          }),
      };
