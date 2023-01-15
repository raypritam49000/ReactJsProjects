import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudent, updateStudent } from '../services/student.service';
import { updateStudentRequest, updateStudentFailure, updateStudentSuccess }
  from '../redux/actions/student.action';


const UpdateStudentComponents = (props) => {
  const [student, setStudent] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getStudent(id).then((response) => {
      setStudent(response?.data);
    }).catch(error => {
      console.log(error);
    });
  }, [id]);

  const handleInputs = (e) => {
    setStudent((preData) => {
      return {
        ...preData, [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, ...others } = student;
    props.updateStudentRequest();
    updateStudent(id, others).then((response) => {
      props.updateStudentSuccess(response?.data);
      navigate("/");
    }).catch((error) => {
      props.updateStudentFailure(error);
    })
  }

  return (
    <div className='contaner mt-5'>
      <h1 className="text-center">Update Student</h1>
      <div className='row'>

        <div className='col-md-6 offset-md-3 shadow mx-auto'>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="id" className="form-label">Enter ID</label>
              <input type="text" className="form-control" id="id" name="id" defaultValue={student.id || ''} onChange={handleInputs} />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Enter Name</label>
              <input type="text" className="form-control" id="name" name="name" defaultValue={student.name || ''} onChange={handleInputs} />
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">Enter City</label>
              <input type="text" className="form-control" id="city" name="city" defaultValue={student.city || ''} onChange={handleInputs} />
            </div>

            <div className="mb-3">
              <label htmlFor="salary" className="form-label">Enter Salary</label>
              <input type="text" className="form-control" id="salary" name="salary" defaultValue={student.salary || ''} onChange={handleInputs} />
            </div>

            <div className="container text-center">
              <button type="submit" className="btn btn-primary">Update Student</button>
              <button type="reset" className="btn btn-danger m-2">Reset</button>
            </div>
          </form>


        </div>

      </div>

    </div>
  )

}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStudentRequest: () => dispatch(updateStudentRequest()),
    updateStudentSuccess: (id, student) => dispatch(updateStudentSuccess(id, student)),
    updateStudentFailure: (error) => dispatch(updateStudentFailure(error))
  }
}

export default connect(null, mapDispatchToProps)(UpdateStudentComponents);