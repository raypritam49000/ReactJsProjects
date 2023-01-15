import axios from 'axios';

export const createStudent = async (student) => {
    return axios.post('http://localhost:9999/students', student, { headers: { contentType: 'application/json' } });
}

export const getAllStudents = async () => {
    return axios.get('http://localhost:9999/students');
}

export const getStudent = async (id) => {
    return axios.get(`http://localhost:9999/students/${id}`);
}

export const deleteStudent = async (id) => {
    return axios.delete(`http://localhost:9999/students/${id}`);
}

export const updateStudent = async (id,student) => {
    return axios.put(`http://localhost:9999/students/${id}`,student, { headers: { contentType: 'application/json' } });
}




