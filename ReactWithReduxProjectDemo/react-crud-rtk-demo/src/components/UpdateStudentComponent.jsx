import React from 'react'
import { useState } from 'react';
import { useCreateStudentMutation, useGetStudentByIdQuery } from '../services/student';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateStudentComponent = () => {

    const [name, setName] = useState("name");
    const [city, setCity] = useState("city");
    const [salary, setSalary] = useState("salary");

    const { id } = useParams();
    console.log(id);
    const responseInfo = useGetStudentByIdQuery(id);
    console.log(responseInfo.data);

    const [createStudent, data] = useCreateStudentMutation();
    const navigate = useNavigate();

    console.log(data);

    const addStudent = (event) => {
        event.preventDefault();

        const student = { name, city, salary }
        console.log(student);

        createStudent(student)
        navigate("/");
        window.location.reload();
    }

    return (
        <>
            <div className='container text-center shadow mt-5'>
                <h1>Update Student</h1>
                <div className='row'>

                    <div className='col-md-8 offset-md-2'>

                        <form>

                            <div className="mb-3">
                                <input type="text" className="form-control" name="name" placeholder='Enter your Name'
                                    onChange={e => setName(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <input type="text" className="form-control" name="city" placeholder='Enter your City'
                                    onChange={e => setCity(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <input type="text" className="form-control" name="salary" placeholder='Enter your salary'
                                    onChange={e => setSalary(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-primary m-2" onClick={event => addStudent(event)}>Add Student</button>
                            <button type="reset" className="btn btn-outline-danger">Reset</button>
                        </form>

                    </div>

                </div>

            </div>


        </>

    )
}

export default UpdateStudentComponent;