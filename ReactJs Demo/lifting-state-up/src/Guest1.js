import React, { Component } from 'react'
import { MyContext } from './App1'

export default class Guest1 extends Component {

    render() {
        return (
            <div>
                <h1>Guest Component</h1>

                <MyContext.Consumer>
                    {

                        ({ data, handleClickContext }) => (
                            <div>

                                <h1>
                                    Name : {data.name} And City : {data.city}
                                </h1>

                                <button type='button' onClick={handleClickContext}>Click Me</button>

                            </div>
                        )
                    }

                </MyContext.Consumer>

                {/*

                <h1>Name : {this.context.data.name} and City : {this.context.data.city} </h1>
                <button type='button' onClick={this.context.handleClickContext}>Click Me</button>

            */}
            </div>
        )
    }
}
