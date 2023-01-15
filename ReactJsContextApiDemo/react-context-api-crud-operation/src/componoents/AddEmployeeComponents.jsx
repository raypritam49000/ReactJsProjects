import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';

const AddEmployeeComponents = () => {

  const [employee, setEmployee] = useState({});
  const navigate = useNavigate();
  const { addEmployee } = useContext(GlobalContext);

  const handleInputs = (e) => {
    setEmployee((preData) => {
      return {
        ...preData, [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9999/employees/",employee).then((response) => {
      addEmployee(response?.data);
      navigate("/")
    }).catch((error) => {
      console.log(error);
    })
  }



  return (
    <div className='contaner mt-5'>
      <h1 className="text-center">Add Student</h1>
      <div className='row'>

        <div className='col-md-6 offset-md-3 shadow mx-auto'>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="id" className="form-label">Enter ID</label>
              <input type="text" className="form-control" id="id" name="id" value={employee.id || ''} onChange={handleInputs} />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Enter Name</label>
              <input type="text" className="form-control" id="name" name="name" value={employee.name || ''} onChange={handleInputs} />
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">Enter City</label>
              <input type="text" className="form-control" id="city" name="city" value={employee.city || ''} onChange={handleInputs} />
            </div>

            <div className="mb-3">
              <label htmlFor="salary" className="form-label">Enter Salary</label>
              <input type="text" className="form-control" id="salary" name="salary" value={employee.salary || ''} onChange={handleInputs} />
            </div>

            <div className="container text-center">
              <button type="submit" className="btn btn-primary">Add Employee</button>
              <button type="reset" className="btn btn-danger m-2">Reset</button>
            </div>
          </form>


        </div>

      </div>

    </div>
  )
}

export default AddEmployeeComponents