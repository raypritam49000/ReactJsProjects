import React from 'react'
import { MyContext } from './Student'

const Student3 = () => {
  return (
    <div>
    <h1>This is Student3 Components</h1>
    <MyContext.Consumer>
                {
                    (data) => <h1> {data.name} | {data.city} | {data.salary} | {data.value}</h1>
                }
            </MyContext.Consumer>
    </div>
  )
}

export default Student3;