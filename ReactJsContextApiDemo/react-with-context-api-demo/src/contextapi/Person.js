import React, { Component } from 'react'
import Employee from './Employee'

export default class Person extends Component {
  render() {
    return (
      <> 
      <h1>This is Person Component</h1>
      <Employee/>
      </>
    )
  }
}
