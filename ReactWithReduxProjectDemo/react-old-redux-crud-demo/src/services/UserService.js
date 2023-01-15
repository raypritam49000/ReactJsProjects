import axios from 'axios';

export const createUser = async (user) => {
    return axios.post('http://localhost:9999/rest/api/users', user, { headers: { "Content-Type": "application/json" } });
}

export const getAllUsers = async () => {
    return axios.get('http://localhost:9999/rest/api/users');
}

export const getUser = async (id) => {
    return axios.get('http://localhost:9999/rest/api/users/' + id);
}

export const deleteUser = async (id) => {
    return axios.delete('http://localhost:9999/rest/api/users/' + id);
}

export const updateUser = async (id, user) => {
    return axios.put('http://localhost:9999/rest/api/users/' + id, user, { headers: { "Content-Type": "application/json" } });
}