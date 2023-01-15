import React, { useReducer, useState } from 'react'


// let iState = "Pritam Ray";

// const Index1 = () => {
//     const [name,setName] = useState(iState);

//     const changeNameHandler = () =>{
//         setName("Amit Kumar");  
//     }


//     return (
//         <div>
//             <h1>Use Reducer Hooks</h1>
//             <h1>Full Name : {name}</h1>
//             <button onClick={changeNameHandler}>Change Name</button>
//         </div>
//     )
// }

// export default Index1;


// const reducer = (state, action) => {
//     switch (action) {
//         case "changeName":
//             return "Raj Kumar"
//         default:
//             return state;
//     }
// }

// let iState = "Pritam Ray";

// const Index1 = () => {
//     const [name, dispatch] = useReducer(reducer,iState);
//     return (
//         <div>
//             <h1>Use Reducer Hooks</h1>
//             <h1>Full Name : {name}</h1>
//             <button onClick={()=>{dispatch("changeName")}}>Change Name</button>
//         </div>
//     )
// }

// export default Index1;


// const reducer = (state, action) => {
//     switch (action) {
//         case "changeName":
//             return {
//                name : "Amit Sahani"
//             }
//         default:
//             return state;
//     }
// }

// let iState = {
//     name: "Pritam Ray"
// };

// const Index1 = () => {
//     const [obj, dispatch] = useReducer(reducer, iState);
//     return (
//         <div>
//             <h1>Use Reducer Hooks</h1>
//             <h1>Full Name : {obj.name}</h1>
//             <button onClick={() => { dispatch("changeName") }}>Change Name</button>
//         </div>
//     )
// }

// export default Index1;


// const reducer = (state, action) => {
//     switch (action) {
//         case "changeName":
//             return {
//                 ...state,
//                 name: "Amit Sahani"
//             }
//         default:
//             return state;
//     }
// }

// let iState = {
//     name: "Pritam Ray",
//     courses: ["Angular", "ReactJs", "VueJs", "Ember Js"]
// };

// const Index1 = () => {
//     const [obj, dispatch] = useReducer(reducer, iState);
//     return (
//         <div>
//             <h1>Use Reducer Hooks</h1>
//             <h1>Full Name : {obj.name}</h1>
//             <h1>Courses Name : {obj.courses[0]}</h1>
//             <button onClick={() => { dispatch("changeName") }}>Change Name</button>
//         </div>
//     )
// }

// export default Index1;




// const reducer = (state, action) => {
//     switch (action) {
//         case "changeName":
//             return {
//                 ...state,
//                 name: "Amit Sahani"
//             }
//         case "changeCourse":
//             return {
//                 ...state,
//                 courses: ["ReactJs","Angular", "VueJs", "Ember Js"]
//             }
//         default:
//             return state;
//     }
// }

// let iState = {
//     name: "Pritam Ray",
//     courses: ["Angular", "ReactJs", "VueJs", "Ember Js"]
// };

// const Index1 = () => {
//     const [obj, dispatch] = useReducer(reducer, iState);
//     const [obj1, dispatch1] = useReducer(reducer, iState);
//     return (
//         <div>
//             <h1>Use Reducer Hooks</h1>
//             <h1>Full Name : {obj.name}</h1>
//             <h1>Courses Name : {obj1.courses[0]}</h1>
//             <button onClick={() => { dispatch("changeName") }}>Change Name</button>
//             <button onClick={() => { dispatch1("changeCourse") }}>Change Course</button>
//         </div>
//     )
// }

// export default Index1;

const courses = ["reactjs", "Angular", "vuejs", "Amberjs"]

let iState = {
    name: "rahul sharma",
    course: courses[1]
}

const reducer = (state, action) => {

    switch (action.type) {
        case "changeName":
            return {
                name: action.payLoad.name,
                course: action.payLoad.course
            }
            break;


        default:
            return state
    }
}

export default function Index1() {



    const [obj, dispatch] = useReducer(reducer, iState);

    return (
        <>
            <h2>USeReducer Hook</h2>
            <h2>FullName :{obj.name}</h2>
            <h2>Course :{obj.course}</h2>

            <button onClick={() => dispatch({ type: "changeName", payLoad: { name: "neeta warma", course: "Java" } })}  >Change Name</button>

        </>
    )
}











