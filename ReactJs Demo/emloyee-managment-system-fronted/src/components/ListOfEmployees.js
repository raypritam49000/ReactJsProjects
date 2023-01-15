import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeServices';

export const ListOfEmployees = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    document.title = "ListOfEmployee"
  }, []);

  useEffect(() => {
    EmployeeService.getAllEmployees()
      .then(res => setEmployees(res.data))
      .catch((error) => console.log(error))
  }, [])

 const updateEmployee = (id) =>{
   setEmployees(employees.filter((employee) => employee.id!==id))
 }

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmploye(id).then((res) => {
      console.log(res.data);
      updateEmployee(id);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      <div className='container text-center border'>
        <h1>List of Employees</h1>
        <Link to="/add-employee" className='btn btn-primary mb-2'>Add Employee</Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.city}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <Link to={`/edit-employee/${employee.id}`} className="btn btn-success m-2">Update</Link>
                    <button type='submit' className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
