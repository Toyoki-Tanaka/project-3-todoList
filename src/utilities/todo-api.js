import sendRequest from './send-request';

const BASE_URL = '/api/todos';

// Show list of to-do
export function showToDo() {
    return sendRequest(`${BASE_URL}/list`, 'GET')
}

// Add a new to-do
export function addNewToDo(newToDo) {
    return sendRequest(`${BASE_URL}/new`, 'POST', newToDo);
}

