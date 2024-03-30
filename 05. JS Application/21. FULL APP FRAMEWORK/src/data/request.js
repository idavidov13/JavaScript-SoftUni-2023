//REQUEST TEMPLATE THAT GENERATES ALL ATTRIBUTES FOR A REQUEST BASED ON THE DATA
import { clearUserData, getUserData } from "../util.js";

const host = "http://localhost:3030";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "application.json";
    options.body = JSON.stringify(data);
  }

  const userData = getUserData();

  if (userData) {
    options.headers["X-Authorization"] = userData.accessToken;
  }

  try {
    const response = await fetch(host + url, options);

    if (!response.ok) {
      if (response.status == 403) {
        clearUserData();
      }

      const err = await response.json();
      throw new Error(err.message);
    }

    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    //TODO Add custom error handling and visualization based on exam requirements
    alert(error.message);
    throw error;
  }
}

//DECORATOR FUNCTIONS FOR MOST COMMON REQUEST - GET/POST/PUT/DEL THAT ARE EXPORTED. THE MAIN FUNCTION "REQUEST" IS PRIVATE
export const get = (url) => request("GET", url);
export const post = (url, data) => request("POST", url, data);
export const put = (url, data) => request("PUT", url, data);
export const del = (url) => request("DELETE", url);
