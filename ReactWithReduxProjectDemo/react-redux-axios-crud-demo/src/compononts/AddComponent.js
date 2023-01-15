import React, { useState } from 'react'
import { PostApiAction } from '../redux/action/Action';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'

const AddComponent = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");

    const isResponse = useSelector(state => state.reducer.isResponse);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
    }

    const countryHandler = (e) => {
        setCountry(e.target.value)
    }

    const sumbitHandler = (e) => {
        e.preventDefault();

        const finalData = {
            name: name,
            email: email,
            phone: phone,
            country: country
        }
        dispatch(PostApiAction(finalData));
        navigate("/");
        
    }

    if (isResponse) {
        alert("Your response has been submit");
    }
    
    return (
        <>

            <div className='container text-center shadow mt-5'>
                <h1>Add Student</h1>
                <div className='row'>

                    <div className='col-md-8 offset-md-2'>

                        <form>

                            <div className="mb-3">
                                <input type="text" className="form-control" name="name" placeholder='Enter your name'
                                    onChange={(e) => { nameHandler(e) }} />
                            </div>

                            <div className="mb-3">
                                <input type="email" className="form-control" aria-describedby="emailHelp" name="email" placeholder='Enter your email'
                                    onChange={(e) => { emailHandler(e) }} />
                            </div>

                            <div className="mb-3">
                                <input type="text" className="form-control" name="phone" placeholder='Enter your phone'
                                    onChange={(e) => phoneHandler(e)}
                                />
                            </div>

                            <div className="mb-3">
                                <input type="text" className="form-control" name="country" placeholder='Enter your country'
                                    onChange={(e) => countryHandler(e)}
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-primary m-2" onClick={(e) => { sumbitHandler(e) }}>Add Student</button>
                            <button type="reset" className="btn btn-outline-danger">Reset</button>
                        </form>

                    </div>

                </div>

            </div>

        </>
    )
}

export default AddComponent;