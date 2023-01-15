import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Login = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = (e) => {
        e.preventDefault();
        console.log({ email, password });
        axios.post(`http://localhost:5000/api/auth/login`, { email, password })
            .then((response) => {
                console.log("response", response);
                localStorage.setItem('login', JSON.stringify({
                    userLogin: true,
                    token: response.data.access_token
                }));
                setError("");
                setEmail("");
                setPassword("");
                navigate("/");
            })
            .catch((error) => {
                setError(error.response.data.message);
            })
    }

    return (
        <div style={{ marginTop: '100px' }}>
            <h2>Login Page</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form className={classes.root} noValidate autoComplete='off' onSubmit={login}>
                <TextField id="username" label="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <TextField id="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <Button style={{ width: '100px' }} variant="contained" color="primary" type='submit'>Login</Button>
            </form>
        </div>
    )
}

export default Login;