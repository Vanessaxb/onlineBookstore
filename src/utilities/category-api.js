import sendRequest from "./send-request";

const BASE_URL = "/api/categories"

export function index () {
    return sendRequest(BASE_URL);
    
}