import React from 'react'
import Student1 from './Student1'
import { createContext } from 'react'


export const MyContext = createContext();
export const MyContext2 = createContext();

const data = {
    name: "Pritam Ray",
    city: "Ropar",
    salary: "45000",
    value: 10
}

const data2 = {
    name: "Raj Kumar",
    city: "Rail",
    salary: "35000",
    value: 20
}


const Student = () => {

    return (
        <div>
            <h1>This is Student Component</h1>
            <MyContext.Provider value={data}>
                <MyContext2.Provider value={data2}>
                    <Student1 />
                </MyContext2.Provider>
            </MyContext.Provider>
        </div>
    )
}

export default Student