import React, { Component } from 'react';
import { MyContext } from '../App';

export default class Student extends Component {
    render() {
        return (
            <>
                <h1>This is Student Component</h1>
                <MyContext.Consumer>
                    {
                        ({ data, handleClick }) =>
                            <>
                                <h4>
                                    Name : {data.name} City: {data.city} Salary: {data.salary} value: {data.value}
                                </h4>
                                <button onClick={handleClick}>Increment Value</button>
                            </>

                    }
                </MyContext.Consumer>
            </>
        )
    }
}
