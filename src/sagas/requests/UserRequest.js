import axios from "axios";

function getUser() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}
function getUserById(id) {
    return axios.get('https://jsonplaceholder.typicode.com/users/' + id);
}

export { getUser, getUserById }