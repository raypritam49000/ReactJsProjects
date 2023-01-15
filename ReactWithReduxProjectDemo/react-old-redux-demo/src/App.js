import React from 'react'
import { connect } from 'react-redux';
import { anotherName } from './actions/action';

const App = (props) => {

  return (
    <div>
      <h1>My Name is {props.myName}</h1>
      <h2>My Courses : </h2>
      {
        props.courses.map((course, index) => (
          <h3 key={index}>{course}</h3>
        ))
      }
      <button onClick={() => { props.ChangeName("Omi Verma") }}>Change Name</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myName: state.name,
    courses: state.courses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeName: (name) => {
      // return dispatch({ type: 'CHANGE_NAME', payload: name })
      return dispatch(anotherName("Pritam Ray"));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



