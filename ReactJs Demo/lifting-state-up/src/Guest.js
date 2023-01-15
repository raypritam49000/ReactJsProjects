import React, { Component } from 'react'

export default class Guest extends Component {
  render() {
    return (
      <div>
      <h1>{(this.props.value)*2} </h1>
      </div>
    )
  }
}
