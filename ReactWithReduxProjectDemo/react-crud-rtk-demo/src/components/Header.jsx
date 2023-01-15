import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Student Managment System</Link>
      </div>
    </nav>

  </>
  )
}

export default Header;