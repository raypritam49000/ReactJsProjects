import React from 'react'
import HigherOrderFun from './HigherOrderFun';


const Home = (props) => {
    return (
        <>
            <h1>This is Home Component</h1>
            <h1>{props.name}</h1>
        </>
    )
}

export default HigherOrderFun(Home);
