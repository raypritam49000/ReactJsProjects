import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUserSuccess } from '../redux/actions/userActions';
import { getUser, updateUser } from '../services/UserService';


const UpdateUserComponents = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getUser(id).then((response) => {
      setUser(response?.data?.data);
    }).catch(error => {
      console.log(error);
    });
  }, [id]);

  const handleInputs = (e) => {
    setUser((preData) => {
      return {
        ...preData, [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { _id, ...others } = user;
    updateUser(id, others).then((response) => {
      dispatch(updateUserSuccess(response?.data?.data));
      navigate("/");
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className='contaner mt-5'>
      <h1 className="text-center">Update User</h1>
      <div className='row'>

        <div className='col-md-6 offset-md-3 shadow mx-auto'>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="id" className="form-label">Enter ID</label>
              <input type="text" className="form-control" id="id" name="id" defaultValue={user._id || ''} onChange={handleInputs} />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Enter Name</label>
              <input type="text" className="form-control" id="name" name="name" defaultValue={user.name || ''} onChange={handleInputs} />
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">Enter City</label>
              <input type="text" className="form-control" id="city" name="city" defaultValue={user.city || ''} onChange={handleInputs} />
            </div>

            <div className="mb-3">
              <label htmlFor="salary" className="form-label">Enter Salary</label>
              <input type="text" className="form-control" id="salary" name="salary" defaultValue={user.salary || ''} onChange={handleInputs} />
            </div>

            <div className="container text-center">
              <button type="submit" className="btn btn-primary">Update User</button>
              <button type="reset" className="btn btn-danger m-2">Reset</button>
            </div>
          </form>


        </div>

      </div>

    </div>
  )

}

export default UpdateUserComponents