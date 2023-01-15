import axios from 'axios';

const BASE_URL = "http://localhost:9999/rest/api";

class EmployeeService{

static getAllEmployees = ()=> axios.get(`${BASE_URL}/getAllEmployees`);
static getEmployee = (id) =>axios.get(`${BASE_URL}/getEmployee/${id}`);
static createEmployee = (employee) => axios.post(`${BASE_URL}/addEmployee`,employee)
static updateEmployee = (id,employee) => axios.put(`${BASE_URL}/updateEmployee/${id}`,employee);
static deleteEmploye = (id) => axios.delete(`${BASE_URL}/deleteEmployee/${id}`);

}

export default EmployeeService;