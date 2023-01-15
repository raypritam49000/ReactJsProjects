import React, { Component } from 'react'
import './App.css'
import User from './User'
import Styles from './App.module.css'

export default class App extends Component {

  state = {
    change: false
  }

  clickHandler = () => {
    console.log("Change Color....");
    this.setState({ change: true });
  }

  render() {

    const btnStyle = {
      color: 'blue',
      backgroundColor: 'orange'
    }

    const textc = {
      color: 'red'
    }

    const texts = {
      fontSize: '80px'
    }

    if (this.state.change) {
      btnStyle.backgroundColor = 'red';
      btnStyle.color = 'yellow';
    }

    let style = false;

    return (
      <div>
        <h1 style={{ ...textc, ...texts, ...{ backgroundColor: 'pink' } }}>Hello Pritam Ray</h1>
        <button style={btnStyle}>Click Me</button> <br />
        <button style={btnStyle} onClick={this.clickHandler}>Change On Click</button>

        <h1 className='txt'>Welcome to Punjab</h1>

        <h2 className='txtg'>Hello React Js App</h2>

        <User rang={style ? "txtg" : "txty"} />

        <h1 className='txtg txts'>Welcome to React World</h1>

        <h1 className={Styles.text}>Welocme to Androtech 4u by Surya Tripathi Sir</h1>
      </div>
    )
  }
}
