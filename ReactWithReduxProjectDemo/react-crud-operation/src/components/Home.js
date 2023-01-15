import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';

const Home = () => {

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        console.log(id);
        dispatch({ type: "Delete_Contact", payload: id });
        toast.success("Contact deleted successfully!!!")
    }

    return (
        <div className='container'>
            <div className='row mt-5'>

                <div className='col-md-12 text-end'>
                    <Link to="/add" className='btn btn-outline-dark'>Add Contact</Link>
                </div>

                <div className='col-md-10 mx-auto text-center'>
                    <h1>Welcome to React Redux Contact Book</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact, id) => (
                                    <tr key={id}>
                                        <th scope="row">{id + 1}</th>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                            <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary m-2">Edit</Link>
                                            <button onClick={() => { deleteContact(contact.id) }} className="btn btn-small btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}

export default Home