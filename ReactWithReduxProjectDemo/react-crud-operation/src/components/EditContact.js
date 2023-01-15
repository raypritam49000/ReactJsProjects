import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const EditContact = () => {

    const [name, setName] = useState("name");
    const [email, setEmail] = useState("email");
    const [number, setNumber] = useState("number");

    const { id } = useParams();
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact])


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !number || !name) {
            return toast.warning("Please fill in all field");
        }

        const checkEmail = contacts.find(
            (contact) => contact.id !== parseInt(id) && contact.email === email && contact
        );

        if (checkEmail) {
            return toast.error("This email already Exists!!")
        }

        //console.log(contacts.find(contact => contact.number === parseInt(number) && contact));

        const checkNumber = contacts.find(
            (contact) => contact.id !== parseInt(id) && contact.number === parseInt(number) && contact
        );

        if (checkNumber) {
            return toast.error("This number already Exists!!")
        }

        const data = {
            id: parseInt(id),
            email,
            name,
            number
        }

        console.log(data);

        dispatch({ type: "Update_Contact", payload: data });
        toast.success("Student updated Successfuly!!!");
        navigate("/");
    }


    return (

        <>
            {
                currentContact ?

                    <>
                        <div className='contaner mt-5'>
                            <h1 className="text-center">Edit Contact {id}</h1>
                            <div className='row'>

                                <div className='col-md-6 offset-md-3 shadow mx-auto'>

                                    <form onSubmit={handleSubmit}>

                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Enter Name</label>
                                            <input type="text" className="form-control" id="name"
                                                value={name} onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Enter Email</label>
                                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                                value={email} onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Enter Phone Number</label>
                                            <input type="number" className="form-control" id="phone"
                                                value={number} onChange={(e) => setNumber(e.target.value)}
                                            />
                                        </div>

                                        <div className="container text-center">
                                            <button type="submit" className="btn btn-primary">Update Contact</button>
                                            <Link to="/" className="btn btn-danger m-2">Cancel</Link>
                                        </div>
                                    </form>


                                </div>

                            </div>

                        </div>

                    </>

                    : (
                        <h1 className="display-3 my-5 text-center">StudentContact with id
                            {id} not exists</h1>
                    )
            }

        </>

    )



}
export default EditContact;