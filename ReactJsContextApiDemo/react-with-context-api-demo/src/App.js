import React, { Component } from 'react'
import Person from './contextapi/Person';
export const MyContext = React.createContext();

export default class App extends Component {

  state = {
    name: "Pritam Ray",
    city: "Ropar",
    salary: "45000",
    value: 10
  }

  handleClickContext = () => {
    this.setState({ value: this.state.value + 1 });
  }

  render() {

    const contextValue = {
      data: this.state,
      handleClick: this.handleClickContext
    }

    return (
      <div>
        <MyContext.Provider value={contextValue}>
          <Person />
        </MyContext.Provider>
      </div>
    )
  }
}
