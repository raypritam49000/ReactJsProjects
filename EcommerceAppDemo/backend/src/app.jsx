import React, { Component } from 'react'
import Layout from './_components/layout'
import { BrowserRouter } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        )
    }
}
