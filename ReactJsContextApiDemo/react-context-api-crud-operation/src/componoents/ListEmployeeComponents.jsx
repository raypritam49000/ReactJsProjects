import React, { useEffect } from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

const ListStudentComponents = () => {

  const { employees, listEmployees, removeEmployee } = useContext(GlobalContext);
  console.log(employees);

  /* eslint-disable */
  useEffect(() => {
    axios.get("http://localhost:9999/employees").then((response) => {
      listEmployees(response?.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  const handleDeleteStudent = (id) => {
    axios.delete("http://localhost:9999/employees/" + id).then((response) => {
      removeEmployee(id);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <>

      <div className='container text-center shadow mt-5'>
      <Link to="/addEmployee" className='btn btn-outline-success mt-2'>Add Employee</Link>
        <h1>List of Employee</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              employees && employees.map((employee, index) => (

                <tr key={index}>
                  <th scope="row">{employee.id}</th>
                  <td>{employee.name}</td>
                  <td>{employee.city}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <Link type='button' to={`updateEmployee/${employee.id}`} className='btn btn-outline-primary m-2'>Edit</Link>
                    <button type='button' className='btn btn-outline-danger' onClick={() => { handleDeleteStudent(employee.id) }}>Delete</button>
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

export default ListStudentComponents;