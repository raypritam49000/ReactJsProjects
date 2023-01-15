import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GetApiAction, DeleteApiAction } from '../redux/action/Action';
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const responseData = useSelector(state => state.reducer.details);
    const isDeleteResponse = useSelector(state => state.reducer.isDeleteResponse);

    useEffect(() => {
        dispatch(GetApiAction());
    }, [dispatch])

    if (isDeleteResponse) {
        alert("Your Data has been deleted!!!");
        window.location.reload(false);
    }

    return (
        <>
            <div className="text-center container mt-5">
                <Link to="/add" className='btn btn-outline-success'>Add Student</Link>
            </div>
            <h1 className='text-center mt-2'>React Redux Crud Operation | Read Operation</h1>
            <div className='row'>

                <div className='col-md-10 offset-md-1 mt-2'>
                    <table className="table shadow border">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Coutry</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                responseData ? responseData.map((data, index) => (
                                    <tr key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.country}</td>
                                        <td>
                                            <Link to={`/edit/${data.id}`} className='btn btn-outline-primary m-2'>Edit</Link>
                                            <button className='btn btn-outline-danger' onClick={() => { dispatch(DeleteApiAction(data.id)) }}>DELETE</button>
                                        </td>
                                    </tr>
                                )) : null
                            }

                        </tbody>
                    </table>

                </div>

            </div>
        </>

    )
}

export default Home;