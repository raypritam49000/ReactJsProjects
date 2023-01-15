import React, { useState } from 'react'
import { createUser } from './../services/UserService';
import { useDispatch } from 'react-redux';
import { createUserSuccess } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddUserComponents = () => {

  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputs = (e) => {
    setUser((preData) => {
      return {
        ...preData, [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    createUser(user).then((response) => {
      console.log(response?.data?.data);
      dispatch(createUserSuccess(response?.data?.data))
      navigate("/")
      //window.location.reload(true);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className='contaner mt-5'>
      <h1 className="text-center">Add User</h1>
      <div className='row'>

        <div className='col-md-6 offset-md-3 shadow mx-auto'>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Enter Name</label>
              <input type="text" className="form-control" id="name" name="name" value={user.name || ''} onChange={handleInputs} />
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">Enter City</label>
              <input type="text" className="form-control" id="city" name="city" value={user.city || ''} onChange={handleInputs} />
            </div>

            <div className="mb-3">
              <label htmlFor="salary" className="form-label">Enter Salary</label>
              <input type="text" className="form-control" id="salary" name="salary" value={user.salary || ''} onChange={handleInputs} />
            </div>

            <div className="container text-center">
              <button type="submit" className="btn btn-primary">Add User</button>
              <button type="reset" className="btn btn-danger m-2">Reset</button>
              <Link to="/" className="btn btn-danger m-2">Show Data</Link>
            </div>
          </form>


        </div>

      </div>

    </div>
  )
}

export default AddUserComponents