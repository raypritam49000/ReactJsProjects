import { ActionTypes } from "../constants/action-Types";


export const getUsersSuccess = (users) => {
    return {
        type: ActionTypes.GET_USERS_SUCCESS,
        payload: users
    };
};


export const createUserSuccess = (user) => {
    return {
        type: ActionTypes.ADD_USER_SUCCESS,
        payload: user
    };
};


export const deleteUserSuccess = (id) => {
    return {
        type: ActionTypes.DELETE_USERS_SUCCESS,
        payload: id
    };
};


export const updateUserSuccess = (user) => {
    return {
        type: ActionTypes.UPDATE_USERS_SUCCESS,
        payload: user
    };
};







