import React, { useContext } from 'react'
import Student3 from './Student3'
import { MyContext } from './Student'
import { MyContext2 } from './Student'


const Student2 = () => {
    const data = useContext(MyContext);
    const data1 = useContext(MyContext2);

    return (
        <div>
            <h1>This is Student2 Component</h1>
            <h4>
                Name : {data.name} City: {data.city} Salary: {data.salary} value: {data.value}
            </h4>

            <h4>
                Name : {data1.name} City: {data1.city} Salary: {data1.salary} value: {data1.value}
            </h4>
            <Student3 />
        </div>
    )
}

export default Student2