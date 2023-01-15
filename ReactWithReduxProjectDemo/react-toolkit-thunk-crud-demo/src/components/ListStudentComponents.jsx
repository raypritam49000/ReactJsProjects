import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchStudents,deleteStudent } from '../redux/thunk/student.thunk'

const ListStudentComponents = () => {

  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.student);
   
  useEffect(() => {
    dispatch(fetchStudents());
  }, [])

  const handleDeleteStudent = (id) => {
    dispatch(deleteStudent(id));
  }

  return (
    <>

      <div className='container text-center shadow mt-5'>
        <Link to="/addStudent" className='btn btn-outline-success mt-2'>ADD STUDENT</Link>
        <h1>List of Students</h1>
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
              students && students.map((student, index) => (

                <tr key={index}>
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.city}</td>
                  <td>{student.salary}</td>
                  <td>
                    <Link type='button' to={`/updateStudent/${student.id}`} className='btn btn-outline-primary m-2'>Edit</Link>
                    <button type='button' className='btn btn-outline-danger' onClick={() => { handleDeleteStudent(student.id) }}>Delete</button>
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