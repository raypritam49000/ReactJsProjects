import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Increment, Decrement } from './features/counterSlice';
import { changeName } from './features/nameSlice';


const App = () => {

  const name = useSelector((state) => state.name);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>React Redux ToolKits Demo</h1>
      <h1>My Name is {name}</h1>
      <button onClick={() => { dispatch(changeName()) }}>Change Name</button>
      <h1>Count : {counter}</h1>
      <button onClick={() => { dispatch(Increment({ type: "INCREMENT", payload: 5 })) }}>Increment</button>
      <button onClick={() => { dispatch(Decrement({ type: "DECREMENT", payload: 5 })) }}>Decrement</button>
    </div>
  )
}

export default App