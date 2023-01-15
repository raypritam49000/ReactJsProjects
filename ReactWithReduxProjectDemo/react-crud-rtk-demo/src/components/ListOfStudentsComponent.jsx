import React from 'react';
import { useGetAllStudentsQuery, useDeleteStudentByIdMutation } from '../services/student';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const ListOfStudentsComponent = () => {

    const { data, error, isLoading } = useGetAllStudentsQuery();
    const navigate = useNavigate();
    const [deleteStudent, responseInfo] = useDeleteStudentByIdMutation();
    console.log(responseInfo);



    const deleteStudentById = (id) => {
        console.log("Delete Student");
        deleteStudent(id);
        navigate("/");
        window.location.reload();
        
    }

    return (
        <>
            {
                error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <>

                        <div className='container text-center shadow mt-5'>
                            <Link to="/addStudent" className='btn btn-outline-success mt-2'>Add Student</Link>
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
                                        data && data.map((student) => (

                                            <tr key={student.id}>
                                                <th scope="row">{student.id}</th>
                                                <td>{student.name}</td>
                                                <td>{student.city}</td>
                                                <td>{student.salary}</td>
                                                <td>
                                                    <button type='button' className='btn btn-outline-primary m-2'>Edit</button>
                                                    <button type='button' className='btn btn-outline-danger' onClick={() => { deleteStudentById(student.id) }}>Delete</button>
                                                </td>
                                            </tr>

                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </>
                ) : null

            }

        </>
    )
}

export default ListOfStudentsComponent;