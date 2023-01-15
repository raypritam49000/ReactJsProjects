import React, { Component } from 'react'

export default class User extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.value * 3} </h1>
            </div>
        )
    }
}
