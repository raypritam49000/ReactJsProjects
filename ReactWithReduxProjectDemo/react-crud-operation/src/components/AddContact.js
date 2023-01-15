import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {

    const [name, setName] = useState("name");
    const [email, setEmail] = useState("email");
    const [number, setNumber] = useState("number");

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !number || !name) {
            return toast.warning("Please fill in all field");
        }

        const checkEmail = contacts.find(
            (contact) => contact.email === email && contact
        );

        if (checkEmail) {
            return toast.error("This email already Exists!!")
        }

        //console.log(contacts.find(contact => contact.number === parseInt(number) && contact));

        const checkNumber = contacts.find(
            (contact) => contact.number === parseInt(number) && contact
        );

        if (checkNumber) {
            return toast.error("This number already Exists!!")
        }

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            email,
            name,
            number
        }

        console.log(data);

        dispatch({ type: "Add_Contact", payload: data });
        toast.success("Student added Successfuly!!!");
        navigate("/");
    }

    return (
        <div className='contaner mt-5'>
            <h1 className="text-center">Add Contact</h1>
            <div className='row'>

                <div className='col-md-6 offset-md-3 shadow mx-auto'>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Enter Name</label>
                            <input type="text" className="form-control" id="name" name="name"
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Enter Email</label>
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="number" className="form-label">Enter Phone Number</label>
                            <input type="number" className="form-control" id="number" name="number"
                                value={number} onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>

                        <div className="container text-center">
                            <button type="submit" className="btn btn-primary">Add Contact</button>
                            <button type="reset" className="btn btn-danger m-2">Reset</button>
                        </div>
                    </form>


                </div>

            </div>

        </div>
    )
}

export default AddContact;