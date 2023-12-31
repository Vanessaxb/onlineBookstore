import sendRequest from "./send-request";

const BASE_URL = "/api/items";

//Index. Get all books
export function getAll() {
  return sendRequest(BASE_URL);
}

//Show. Get book by Id
export function getById(id) {
  console.log(id);
  return sendRequest(`${BASE_URL}/${id}`);
}

//create new book
export function create(bookData) {
  console.log(bookData);
  return sendRequest(BASE_URL, "POST", bookData);
}

//update book
export function update(id, bookData) {
  console.log(bookData);
  return sendRequest(`${BASE_URL}/${id}`, "PUT", bookData);
}

//delete book
export function remove(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}
