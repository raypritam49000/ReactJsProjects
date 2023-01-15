import './App.css';
import React, { Component } from 'react'
import User from './User';
import Guest from './Guest';
class App extends Component {

  state = {
    value: 20
  }

  render() {
    return (
      <div>
        <User value={this.state.value} />
        <Guest value={this.state.value} />
        <button type="Button" onClick={() => { this.setState({ "value": 100 }) }}>Change State</button>
      </div>
    )
  }
}


export default App;
