import React, { Component } from 'react'
import FormValidator from './FormValidators';
import validator from 'validator';

export default class App extends Component {

  constructor() {
    super();

    this.validator = new FormValidator([
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Please enter name'
      },
      {
        field: 'name',
        method: validator.isUppercase,
        validWhen: true,
        message: 'Please enter name in Upper Case'
      },

      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Please enter  email id'
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'Please enter valid email id'
      },
      {
        field: 'phone',
        method: 'isEmpty',
        validWhen: false,
        message: 'Please enter phone no'
      },
      {
        field: 'phone',
        method: 'matches',
        args: [/^(\+\d{1,3}[- ]?)?\d{10}$/],
        validWhen: true,
        message: 'Please enter valid phone number'
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Please enter password'
      },
      {
        field: 'confirmPassword',
        method: 'isEmpty',
        validWhen: false,
        message: 'Please enter password'
      },
      {
        field: 'confirmPassword',
        method: this.passwordMatch,
        validWhen: true,
        message: 'Password and confirm password must be match'
      }
    ]);

    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      validation: this.validator.validationInit()
    }
    this.submitted = false;
  }

  passwordMatch = (confirmpass) => {
    return confirmpass === this.state.password
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.submitted = true;
    const validation = this.validator.validate(this.state);

    this.setState({ validation })

    if (validation.isValid) {
      console.log(this.state);
    }

    console.log(this.state);
  }


  render() {

    const { name, email, phone, password, confirmPassword } = this.state
    let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation
    console.log(validation);

    return (

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow">
              <div className="card-header">
                <h3 className="text-center">Register Form</h3>
              </div>
              <div className="card-body">

                <form onSubmit={this.handleSubmit}>

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter Name</label>
                    <input type="text" 
                    className={"form-control" + (validation.name.isInvalid ? 'has-error' : '')}
                    id="name" 
                    name="name" 
                    value={name} 
                    placeholder="Enter Here" 
                    onChange={this.handleInput} />

                    <span className='help-block'>{validation.name.message}</span>

                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" 
                    className={'form-control' + (validation.email.isInvalid ? 'has-error' : '')}
                    id="email" 
                    name="email" 
                    value={email} 
                    placeholder="Enter Here" 
                    onChange={this.handleInput} />

                    <span className='help-block'>{validation.email.message}</span>

                  </div>

                  <div className='mb-3'>
                    <label htmlFor="phone" className="form-label">Phone (ex:+91 9021223134)</label>
                    <input type="text" 
                    className={'form-control' + (validation.phone.isInvalid ? 'has-error' : '')}
                    name='phone' 
                    value={phone} 
                    placeholder='Enter Here' 
                    onChange={this.handleInput} />

                    <span className='help-block'>{validation.phone.message}</span>

                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Enter Password</label>
                    <input type="password" 
                    className={'form-control' + (validation.password.isInvalid ? 'has-error' : '')}
                    id="password" 
                    name="password" 
                    value={password} 
                    placeholder="Enter Here" 
                    onChange={this.handleInput} />

                    <span className='help-block'>{validation.password.message}</span>

                  </div>

                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Enter ConfirmPassword</label>
                    <input type="password" 
                    className={'form-control' + (validation.confirmPassword.isInvalid ? 'has-error' : '')} 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    placeholder="Enter Here" 
                    onChange={this.handleInput} />

                    <span className='help-block'>{validation.confirmPassword.message}</span>
                  </div>

                  <div>
                    <button type="submit" className="btn btn-outline-primary">Register</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
