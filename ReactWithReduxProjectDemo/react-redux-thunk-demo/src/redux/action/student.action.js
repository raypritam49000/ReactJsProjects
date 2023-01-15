import {
    GET_STUDENTS_SUCCESS, GET_STUDENTS_REQUEST, GET_STUDENTS_FAILURE,
    ADD_STUDENT_REQUEST, ADD_STUDENT_SUCCESS, ADD_STUDENT_FAILURE,
    DELETE_STUDENT_REQUEST, DELETE_STUDENT_SUCCESS,DELETE_STUDENT_FAILURE,
    UPDATE_STUDENT_REQUEST, UPDATE_STUDENT_SUCCESS, UPDATE_STUDENT_FAILURE
} from "../constants/student.actionType.js"

export const getStudentRequest = () => {
    return {
        type: GET_STUDENTS_REQUEST
    }
}


export const getStudentSuccess = (students) => {
    return {
        type: GET_STUDENTS_SUCCESS, payload: students
    }
}

export const getStudentsFailure = (error) => {
    return {
        type: GET_STUDENTS_FAILURE,
        payload: error
    }
}


export const deleteStudentRequest = () => {
    return {
        type: DELETE_STUDENT_REQUEST
    }
}

export const deleteStudentSuccess = (id) => {
    return {
        type: DELETE_STUDENT_SUCCESS, payload: id
    }
}

export const deleteStudentFailure = (error) => {
    return {
        type: DELETE_STUDENT_FAILURE,payload: error
    }
}

export const updateStudentRequest = () => {
    return {
        type: UPDATE_STUDENT_REQUEST
    }
}

export const updateStudentSuccess = (student) => {
    return {
        type: UPDATE_STUDENT_SUCCESS, payload: student
    }
}

export const updateStudentFailure = (error) => {
    return {
        type: UPDATE_STUDENT_FAILURE,payload: error
    }
}

export const addStudentRequest = () => {
    return {
        type: ADD_STUDENT_REQUEST
    }
}


export const addStudentSuccess = (student) => {
    return {
        type: ADD_STUDENT_SUCCESS, payload: student
    }
}

export const addStudentFailure = (error) => {
    return {
        type: ADD_STUDENT_FAILURE,payload: error
    }
}




