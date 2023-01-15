// const initialState = {
//     name: "Amit Kumar"
// }

// const reducers = (state, action) => {
//     return initialState;
// }

// export default reducers;

const initialState = {
    name: "Amit Kumar",
    courses:["Java","Java Script","ReactJs","Angular"]
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return {
                ...state,name: action.payload
            }
        default:
            return initialState;
    }
}
export default reducers;

