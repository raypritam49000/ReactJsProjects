import React, { Component } from 'react'
import Person from './Person';

class Student extends Component {

    styleObj = {
        fontSize: 50
    }

    render() {
        return (
            <>
                <Person />
                <h1 style={{ color: 'red', backgroundColor: 'blue', textAlign: 'center' }}>Welcome to Sahosoft Solutions</h1>
                <h1 style={this.styleObj}>Welcome to AndrotechJava4u Classes</h1>
                <h1 style={{ color: 'yellow', backgroundColor: 'blue', ...this.styleObj }}>Welcome to AndrotechJava4u Classes</h1>
            </>
        )
    }
}

export default Student;
