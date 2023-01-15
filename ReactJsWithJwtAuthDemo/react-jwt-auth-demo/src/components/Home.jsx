import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const userNotLogin = () => (
    <>
      <h2>Its seems's like you are not login</h2>
      <h3>
        If you have an account , then please <Link to={`/login`}>Login</Link>
      </h3>
      <h3>
        Don't have an account,then please do {" "}
        <Link to={`/register`}>Register</Link>
      </h3>
    </>
  )

  const isLoginTrue = JSON.parse(localStorage.getItem('login'))
  
  return (
    <div style={{ marginTop: '100px' }}>
      {isLoginTrue && isLoginTrue.userLogin ? (<h2>Welcome Back User</h2>) : <>{userNotLogin()}</>}
    </div>
  )
}

export default Home;