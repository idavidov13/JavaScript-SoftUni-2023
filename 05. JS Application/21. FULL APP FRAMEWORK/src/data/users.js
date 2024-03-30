import { clearUserData, setUserData } from "../util.js";
import { post, get } from "./request.js";

//ENDPOINTS OF THE REQUEST THAT WILL BE MADE
const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

//COMMON FUNCTIONS FOR AUTHENTIFICATION (LOGIN/REGISTER/LOGOUT) IN THE APP
export async function login(email, password) {
  const result = await post(endpoints.login, { email, password });

  setUserData(result);
}

export async function register(email, password) {
  const result = await post(endpoints.register, { email, password });

  setUserData(result);
}

export async function logout() {
  const promise = get(endpoints.logout);

  clearUserData();
  await promise;
}
