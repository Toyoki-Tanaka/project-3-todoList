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

export function deleteToDo(id) {
    return sendRequest(`${BASE_URL}/list/${id}`, 'DELETE')
}

// Edit a specific to-do 
export function editToDo(id, listDetails) {
    return sendRequest(`${BASE_URL}/${id}/edit, 'GET`, listDetails)
}

// Show individual to-do
export function showIndividualToDo(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'GET')
}
