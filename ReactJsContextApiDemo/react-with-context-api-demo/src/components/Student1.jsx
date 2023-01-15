import React from 'react'
import Student2 from './Student2'
import { MyContext } from './Student'
import { MyContext2 } from './Student'

const Student1 = () => {
    return (
        <div>
            <h1>This is Student1 Components</h1>
            <MyContext.Consumer>
                {
                    (data) => {
                        return (
                            <MyContext2.Consumer>

                              {
                                (data1) => {
                                    return <div>
                                    <h4>
                                    Name : {data.name} City: {data.city} Salary: {data.salary} value: {data.value}
                                   </h4>

                                   <h4>
                                   Name : {data1.name} City: {data1.city} Salary: {data1.salary} value: {data1.value}
                                  </h4>
                                    
                                    </div>
                                }
  
                              }


                            </MyContext2.Consumer>
                        )

                    }
                }

            </MyContext.Consumer>
            <Student2 />
        </div>
    )
}

export default Student1;