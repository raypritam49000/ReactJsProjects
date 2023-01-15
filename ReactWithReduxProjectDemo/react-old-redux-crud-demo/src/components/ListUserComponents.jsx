import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersSuccess, deleteUserSuccess } from '../redux/actions/userActions'
import { getAllUsers, deleteUser } from '../services/UserService'
import { Link } from 'react-router-dom';

const ListUserComponents = () => {

  const users = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllUsers().then((response) => {
      dispatch(getUsersSuccess(response?.data?.data));
    }).catch((error) => {
       console.log(error);
    })
  }, [])

  const handleDeleteUser = (id) => {
    deleteUser(id).then((response) => {
      console.log(response?.data);
      dispatch(deleteUserSuccess(id));
    }).catch((error) => {
      console.log(error);
    })
  }

  return (

    <>

      <div className='container text-center shadow mt-5'>
        <Link to="/addUser" className='btn btn-outline-success mt-2'>ADD USER</Link>
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
              users && users.map((user,index) => (

                <tr key={index}>
                  <th scope="row">{user._id}</th>
                  <td>{user.name}</td>
                  <td>{user.city}</td>
                  <td>{user.salary}</td>
                  <td>
                    <Link type='button' to={`/updateUser/${user._id}`} className='btn btn-outline-primary m-2'>Edit</Link>
                    <button type='button' className='btn btn-outline-danger' onClick={() => { handleDeleteUser(user._id) }}>Delete</button>
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

export default ListUserComponents;