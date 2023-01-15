import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeServices';
import { useNavigate, useParams } from 'react-router-dom';


export const CreateEmployee = () => {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        document.title = "Add Employee"
    }, [])

    const saveorUpdateEmployee = (event) => {
        event.preventDefault();
        const employee = { name, city, salary }
        
        if(id){
            EmployeeService.updateEmployee(id,employee).then((res) => {
                navigate('/employees');
                console.log(res.data);
            }).catch((error) => {
                console.log(error);
            });
        }
        else{

            EmployeeService.createEmployee(employee).then((res) => {
                navigate('/employees');
                console.log(res.data);
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    useEffect(()=>{
        EmployeeService.getEmployee(id).then((response)=>{
          setName(response.data.name);
          setCity(response.data.city);
          setSalary(response.data.salary);
        }).catch((error)=>{
         console.log(error);
        })
    },[]);

    const title = () =>{

     if(id){
        return <h2 className='text-center'>Update Employee</h2>
     }
     else{
        return <h2 className='text-center'>Add Employee</h2>
     }

    }

    return (
        <>
            <div className='container mt-2'>

                <div className="card">

                    <div className='card-header text-center bg-primary text-white'>
                        {
                            title()
                        }
                    </div>

                    <div className='card-body'>

                        <form method='post'>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Enter Your Name</label>
                                <input type="text" className="form-control" id="name" name='name' value={name} placeholder='Enter Here' required onChange={(e) => {
                                    console.log(e.target.value);
                                    setName(e.target.value)
                                }} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">Enter Your City</label>
                                <input type="city" className="form-control" id="city" name='city' value={city} placeholder='Enter Here' required onChange={(e) => {
                                    console.log(e.target.value);
                                    setCity(e.target.value)
                                }} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="salary" className="form-label">Enter Your Salary</label>
                                <input type="salary" className="form-control" id="salary" name='salary' value={salary} placeholder='Enter Here' required onChange={(e) => {
                                    console.log(e.target.value);
                                    setSalary(e.target.value)
                                }} />
                            </div>

                            <div className='text-center'>
                                <button type="submit" className="btn btn-primary m-2" onClick={(event) => {
                                    saveorUpdateEmployee(event);
                                }}>Add Employee</button>
                                <button type="reset" className="btn btn-danger">Reset</button>
                            </div>
                        </form>

                    </div>
                </div>


            </div>


        </>
    )
}
