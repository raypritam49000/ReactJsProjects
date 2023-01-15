import React, { Component } from 'react'
import User1 from './User1';
export const MyContext = React.createContext();

export default class App1 extends Component {
    state = {
        name: "Pritam Ray",
        city: "Ropar"
    }

    handleClickContext = () => {
        this.setState({ "name": "Omi Verma", "city": "Prem Nagar" })
    }


    render() {

        const contextValue = {
            data: this.state,
            handleClickContext: this.handleClickContext
        }

        return (
            <div>
                <h1>App Component</h1>
                <MyContext.Provider value={contextValue}>
                    <User1 />
                </MyContext.Provider>
            </div>
        )
    }
}
