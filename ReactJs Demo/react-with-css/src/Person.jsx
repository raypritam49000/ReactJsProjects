import React from "react";
import { Component } from "react"

class Person extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         isActive: true
    //     }
    // }


    state = {
        isActive: true
    }

    toggleColor = () => {

        this.setState({
            isActive: !this.state.isActive
        })


    }

    render() {

        this.styleObj = {
            color: 'white',
            //backgroundColor: this.state.isActive ? 'red' : 'yellow'

        }

        if (this.state.isActive) {
            this.styleObj.backgroundColor = "red";
        }
        else {
            this.styleObj.backgroundColor = "green";
        }


        return (
            <>

                <button style={this.styleObj} onClick={this.toggleColor}   >{(this.state.isActive) ? "red" : "green"}</button>
            </>
        )
    }


}

export default Person;