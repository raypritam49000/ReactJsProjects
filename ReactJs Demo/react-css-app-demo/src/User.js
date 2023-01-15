import React, { Component } from 'react'
import './User.css'
import Styles from './User.module.css'

export default class User extends Component {
    render() {
        return (
            <div>
                <h1 className='txt1'>Hello Users</h1>
                <h1 className={this.props.rang}>Welcome to Punjab</h1>
                <h1 className={Styles.text}>Welocme to Androtech 4u by Surya Tripathi Sir</h1>
            </div>
        )
    }
}
