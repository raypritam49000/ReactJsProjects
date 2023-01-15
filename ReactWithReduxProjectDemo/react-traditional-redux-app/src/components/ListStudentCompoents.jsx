import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { 
  getStudentRequest, getStudentSuccess, getStudentsFailure,
  deleteStudentRequest, deleteStudentSuccess,deleteStudentFailure
 } from '../redux/actions/student.action';
import { getAllStudents,deleteStudent } from '../services/student.service';
import { Link } from 'react-router-dom';

const ListStudentComponents = (props) => {

  console.log(props);
  
  /* eslint-disable*/
  useEffect(() => {
    props.getStudentRequest();
    getAllStudents().then((response) => {
      props.getStudentSuccess(response?.data);
    }).catch((error) => {
      props.getStudentsFailure(error);
    })
  }, [])

  const handleDeleteStudent = (id) => {
    props.deleteStudentRequest();
    deleteStudent(id).then((response) => {
      props.deleteStudentSuccess(id);
    }).catch((error) => {
      props.deleteStudentFailure(error);
    })
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
              props.students && props.students.map((student, index) => (

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

const mapStateToProps = (state) => {
  console.log(state.isSuccess);
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudentRequest: () => dispatch(getStudentRequest()),
    getStudentSuccess: (students) => dispatch(getStudentSuccess(students)),
    getStudentsFailure: (error) => dispatch(getStudentsFailure(error)),
    deleteStudentRequest: () => dispatch(deleteStudentRequest()),
    deleteStudentSuccess:(id)=> dispatch(deleteStudentSuccess(id)),
    deleteStudentFailure:(error)=> dispatch(deleteStudentFailure(error))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ListStudentComponents);