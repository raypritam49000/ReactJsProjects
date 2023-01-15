import React, { useState, useEffect } from 'react'
import { UpdateApiAction } from '../redux/action/Action';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import GetDetailsByHooks from '../hooks/getDetailsByHooks';

const UpdateComponent = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");

    const { id } = useParams();
    const dispatch = useDispatch();
    const isUpdateResponse = useSelector(state => state.reducer.isUpdateResponse);

    const [detailById] = GetDetailsByHooks(id);

    useEffect(() => {
        const data = () => {
            if (detailById.data) {
                setName(detailById.data.name);
                setEmail(detailById.data.email);
                setPhone(detailById.data.phone);
                setCountry(detailById.data.country);
            }
        }
        data()
    }, [detailById.data])

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

        dispatch(UpdateApiAction(finalData, id));
    }

    if (isUpdateResponse) {
        alert("Your data has been updated!!");
    }



    return (
        <>

            <div className='container text-center shadow mt-5'>
                <h1>Update Student</h1>
                <div className='row'>

                    <div className='col-md-8 offset-md-2'>

                        <form>

                            <div className="mb-3">
                                <input type="text" className="form-control" name="name" placeholder='Enter your name'
                                    onChange={(e) => { nameHandler(e) }} value={id} />
                            </div>

                            <div className="mb-3">
                                <input type="text" className="form-control" name="name" placeholder='Enter your name'
                                    onChange={(e) => { nameHandler(e) }} value={name} />
                            </div>

                            <div className="mb-3">
                                <input type="email" className="form-control" aria-describedby="emailHelp" name="email" placeholder='Enter your email'
                                    onChange={(e) => { emailHandler(e) }} value={email} />
                            </div>

                            <div className="mb-3">
                                <input type="text" className="form-control" name="phone" placeholder='Enter your phone'
                                    onChange={(e) => phoneHandler(e)} value={phone}
                                />
                            </div>

                            <div className="mb-3">
                                <input type="text" className="form-control" name="country" placeholder='Enter your country'
                                    onChange={(e) => countryHandler(e)} value={country}
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-primary m-2" onClick={(e) => { sumbitHandler(e) }}>Update Student</button>
                            <button type="submit" className="btn btn-outline-danger">Reset</button>
                        </form>

                    </div>

                </div>

            </div>

        </>
    )
}

export default UpdateComponent;