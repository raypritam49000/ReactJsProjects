import React, { Component } from 'react'
import FormValidator from '../../_validators/FormValidator'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Unlock, User } from 'react-feather';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class LoginTabset extends Component {
    constructor(props) {
        super(props);

        this.validatorLogin = new FormValidator([
            {
                field: 'userName',
                method: 'isEmpty',
                validWhen: false,
                message: 'UserName is required'
            },
            {
                field: 'userName',
                method: 'isEmail',
                validWhen: true,
                message: 'Please enter valid UserName'
            },
            {
                field: 'password',
                method: 'isEmpty',
                validWhen: false,
                message: 'Password is required'
            }
        ]);

        this.validatorReg = new FormValidator([
            {
                field: 'firstName',
                method: 'isEmpty',
                validWhen: false,
                message: 'First Name is required'
            },
            {
                field: 'lastName',
                method: 'isEmpty',
                validWhen: false,
                message: 'Last Name is required'
            },
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'Email Id is required'
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'Please enter valid email id'
            },
            {
                field: 'password',
                method: 'isEmpty',
                validWhen: false,
                message: 'Password is required'
            },
            {
                field: 'confirmPassword',
                method: 'isEmpty',
                validWhen: false,
                message: 'Confirm Password is required'
            },
            {
                field: 'confirmPassword',
                method: this.passwordMatch,
                validWhen: true,
                message: 'Password and Confirm Password must be match'
            }
        ]);

        this.state = {
            tabIndex: 0,

            userName: '',
            password: '',
            loginSubmitted: false,

            user: {
                firstName: '',
                lastName: '',
                email: '',
                userTypeId: 1,
                password: '',
                confirmPasword: ''
            },
            regSubmitted: false,

            validationLogin: this.validatorLogin.valid(),
            validationReg: this.validatorReg.valid()
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleReg = this.handleReg.bind(this);
    }

    passwordMatch = (confirmPass, state) => {
        return state.user.password === confirmPass;
    }

    tabChange(index) {
        this.setState({
            tabIndex: index
        });
    }

    handleLoginInput = (e) => {
        e.preventDefault();
        // this.setState({
        //     [e.target.name] : e.target.value
        // });
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    clearLoginForm = () => {
        this.setState({
            userName: '',
            password: ''
        });
    }

    handleRegInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        const { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    clearRegForm = () => {
        this.setState({
            user: {
                firstName: '',
                lastName: '',
                email: '',
                userTypeId: 1,
                password: '',
                confirmPasword: ''
            }
        });
    }

    handleLogin(e) {
        e.preventDefault();
        const validation = this.validatorLogin.validate(this.state, '');
        this.setState({
            validationLogin: validation,
            loginSubmitted: true
        });

        const { userName, password } = this.state;

        if (validation.isValid) {
            // Login Code Here
        }
    }

    handleReg(e) {
        e.preventDefault();
        const validation = this.validatorReg.validate(this.state, 'user');
        this.setState({
            validationLogin: validation,
            regSubmitted: true
        });

        const { user } = this.state;

        if (validation.isValid) {
            // Registration Code Here
        }
    }

    render() {
        const { userName, password, loginSubmitted, validationLogin, user, regSubmitted, validationReg } = this.state;

        let _validatorReg = regSubmitted ? this.validatorReg.validate(this.state, 'user') : validationReg;
        let _validatorLogin = loginSubmitted ? this.validatorLogin.validate(this.state, '') : validationLogin;

        return (
            <>
                <Tabs selectedIndex={this.state.tabIndex} onSelect={(index) => this.tabChange(index)}  >
                    <TabList className="nav nav-tabs tavb-coupon" >
                        <Tab className="nav-link" ><Unlock /> Login</Tab>
                        <Tab className="nav-link"><User />Register</Tab>
                    </TabList>
                    <TabPanel>
                        <form className="form-horizontal auth-form" onSubmit={this.handleLogin} >
                            <div className='form-group'>
                                <input name="userName"
                                    type="email"
                                    placeholder="Username"
                                    className={"form-control " + (_validatorLogin.userName.isInvalid ? "has-error" : "")}
                                    value={userName}
                                    onChange={this.handleLoginInput}
                                />
                                {
                                    _validatorLogin.userName.isInvalid &&
                                    <div className='help-block' >{_validatorLogin.userName.message}</div>
                                }
                            </div>
                            <div className='form-group'>
                                <input name="password"
                                    type="password"
                                    placeholder="Password"
                                    className={"form-control " + (_validatorLogin.password.isInvalid ? "has-error" : "")}
                                    value={password}
                                    onChange={this.handleLoginInput}
                                />
                                {
                                    _validatorLogin.password.isInvalid &&
                                    <div className='help-block' >{_validatorLogin.password.message}</div>
                                }
                            </div>
                            <div className="form-button">
                                <button className="btn btn-primary" type="submit" >Login</button>
                            </div>
                        </form>
                    </TabPanel>
                    <TabPanel>
                        <form className="form-horizontal auth-form" onSubmit={this.handleReg} >
                            <div className="form-group">
                                <input name="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    className={"form-control " + (_validatorReg.firstName.isInvalid ? "has-error" : "")}
                                    value={user.firstName}
                                    onChange={this.handleRegInput}
                                />
                                {
                                    _validatorReg.firstName.isInvalid &&
                                    <div className='help-block' >{_validatorReg.firstName.message}</div>
                                }
                            </div>
                            <div className="form-group">
                                <input name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    className={"form-control " + (_validatorReg.lastName.isInvalid ? "has-error" : "")}
                                    value={user.lastName}
                                    onChange={this.handleRegInput}
                                />
                                {
                                    _validatorReg.lastName.isInvalid &&
                                    <div className='help-block' >{_validatorReg.lastName.message}</div>
                                }
                            </div>
                            <div className="form-group">
                                <input name="email"
                                    type="email"
                                    placeholder="Email"
                                    className={"form-control " + (_validatorReg.email.isInvalid ? "has-error" : "")}
                                    value={user.email}
                                    onChange={this.handleRegInput}
                                />
                                {
                                    _validatorReg.email.isInvalid &&
                                    <div className='help-block' >{_validatorReg.email.message}</div>
                                }
                            </div>
                            <div className="form-group">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className={"form-control " + (_validatorReg.password.isInvalid ? "has-error" : "")}
                                    value={user.password}
                                    onChange={this.handleRegInput}
                                />
                                {
                                    _validatorReg.password.isInvalid &&
                                    <div className='help-block' >{_validatorReg.password.message}</div>
                                }
                            </div>
                            <div className="form-group">
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    className={"form-control " + (_validatorReg.confirmPasword.isInvalid ? "has-error" : "")}
                                    value={user.confirmPasword}
                                    onChange={this.handleRegInput}
                                />
                                {
                                    _validatorReg.confirmPasword.isInvalid &&
                                    <div className='help-block' >{_validatorReg.confirmPasword.message}</div>
                                }
                            </div>
                            <div className="form-button">
                                <button className="btn btn-primary" type="submit">Register</button>
                            </div>
                        </form>
                    </TabPanel>
                </Tabs>
                <ToastContainer />
            </>
        )
    }
}
