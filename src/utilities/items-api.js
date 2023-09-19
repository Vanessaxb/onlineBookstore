import sendRequest from './send-request';

const BASE_URL = '/api/items';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

//create new book
export function create(bookData) {
  console.log(bookData);
  return sendRequest(BASE_URL, 'POST', bookData)
}