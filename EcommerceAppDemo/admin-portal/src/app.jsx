import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './_components/auth/login';
import { PrivateRoute } from './_privateRoute/privateRoute';
import Dashboard from './_components/dashboard/dashboard';


export default class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                
                    <Route path='/' element={<Login />} />
                    <Route path='/auth/login' element={<Login />} />

                    <Route path="/" element={PrivateRoute} >
                        <Route path='/dashboard' element={<Dashboard />} />
                    </Route>

                    <Route path='*' element={<Login />} />
                </Routes>
            </Router>
        )
    }
}

