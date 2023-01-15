import React, { Component } from 'react'
import Student from './Student'

export default class Employee extends Component {
  render() {
    return (
      <div>
      <h1>This is Employee Component</h1>
      <Student/>
      </div>
    )
  }
}
