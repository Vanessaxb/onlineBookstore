import { getToken } from "./users-service";
import sendRequest from "./send-request";
const BASE_URL = "/api/users";

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

//makes request from backend
export function getAllUsers() {
  return sendRequest(BASE_URL, "GET" )
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

/*--- Helper Functions ---*/


