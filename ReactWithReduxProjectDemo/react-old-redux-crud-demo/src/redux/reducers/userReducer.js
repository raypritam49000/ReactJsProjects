import { ActionTypes } from "../constants/action-Types";

const initialState = {
    details: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                details: action.payload
            }
        case ActionTypes.ADD_USER_SUCCESS:
            return {
                ...state,
                details: [...state.details, action.payload]
            }
        case ActionTypes.DELETE_USERS_SUCCESS:
            return {
                ...state,
                details: [...state.details.filter(user => user._id !== action.payload)],
            }
        case ActionTypes.UPDATE_USERS_SUCCESS:

            return {
                ...state,
                details: state.details.map(user => {
                    if (user._id === action.payload._id) {
                        return { ...user, ...action.payload };
                    }
                    else{
                        return user;
                    }
                })
            };
        default:
            return state;
    }
}

export default Reducer;

// export  const dataReducer = (state= InitialState , action = null) => {
//     switch(action.type) {
//     case types.UPDATE_DATA:
//         return Object.assign({}, state, {
//            data: state.data.map(item => {
//                return item.id === action.payload.id ? action.payload : item;
//            }); // replace matched item and returns the array
//         });
//     default:
//         return state;
//     }
// }

// export  const dataReducer = (state= InitialState , action = null) => {
//     switch(action.type) {
//     case types.UPDATE_DATA:
//         return Object.assign({}, state, {
//            data: state.data.filter(item => {
//                return item.id !== action.id; //delete matched data
//            }).concat(action.payload); //concats new data
//         });
//     default:
//         return state;
//     }
// }