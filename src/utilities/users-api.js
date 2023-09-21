import { getToken } from "./users-service";
import sendRequest from "./send-request";

const BASE_URL = "/api/users";


//Index. Get all Users (makes request from backend)
export function getAllUsers() {
  return sendRequest(BASE_URL, "GET" )
}

//Show. Get Users by ID
export function getUserById(id) {
  return sendRequest(`${BASE_URL}/${id}`)
}

//Update user
export function update(id, userData) {
  console.log(userData);
  return sendRequest(`${BASE_URL}/${id}`, "PUT", userData);
}

//Delete user
export function remove(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

//Login
export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

//SignUp
export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

//CheckToken
export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

/*--- Helper Functions ---*/


