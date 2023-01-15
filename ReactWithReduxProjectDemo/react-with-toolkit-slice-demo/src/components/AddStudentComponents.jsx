import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addStudent } from '../redux/actions/student.action';

const AddStudentComponents = () => {

  const [student, setStudent] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputs = (e) => {
    setStudent((preData) => {
      return {
        ...preData, [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
    dispatch(addStudent(student));
    navigate("/")
  }

  return (
    <div className='contaner mt-5'>
      <h1 className="text-center">Add Student</h1>
      <div className='row'>

        <div className='col-md-6 offset-md-3 shadow mx-auto'>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="id" className="form-label">Enter ID</label>
              <input type="text" className="form-control" id="id" name="id" value={student.id || ''} onChange={handleInputs} />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Enter Name</label>
              <input type="text" className="form-control" id="name" name="name" value={student.name || ''} onChange={handleInputs} />
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">Enter City</label>
              <input type="text" className="form-control" id="city" name="city" value={student.city || ''} onChange={handleInputs} />
            </div>

            <div className="mb-3">
              <label htmlFor="salary" className="form-label">Enter Salary</label>
              <input type="text" className="form-control" id="salary" name="salary" value={student.salary || ''} onChange={handleInputs} />
            </div>

            <div className="container text-center">
              <button type="submit" className="btn btn-primary">Add Student</button>
              <button type="reset" className="btn btn-danger m-2">Reset</button>
              <Link to="/" className="btn btn-success m-2">Show Student Data</Link>
            </div>
          </form>


        </div>

      </div>

    </div>
  )
}

export default AddStudentComponents;