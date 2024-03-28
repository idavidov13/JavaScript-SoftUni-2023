import { clearUserData, getUserData } from "../util.js";

const host = "http://localhost:3030";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const userData = getUserData();

  if (userData) {
    options.headers["X-Authorization"] = userData.accessToken;
  }

  try {
    const res = await fetch(host + url, options);

    if (!res.ok) {
      if ((res.status = 403)) {
        clearUserData();
      }

      const err = await res.json();
      throw new Error(err.message);
    }

    return await res.json();
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

export const get = (url) => request("get", url);
export const post = (url, data) => request("post", url, data);
export const put = (url, data) => request("put", url, data);
export const del = (url) => request("delete", url);

window.api = { get, post, put, del };
