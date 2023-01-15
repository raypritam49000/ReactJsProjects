import {
    ADD_STUDENT_REQUEST, ADD_STUDENT_SUCCESS, ADD_STUDENT_FAILURE,
    DELETE_STUDENT_SUCCESS, DELETE_STUDENT_FAILURE, DELETE_STUDENT_REQUEST,
    UPDATE_STUDENT_SUCCESS, UPDATE_STUDENT_REQUEST, UPDATE_STUDENT_FAILURE,
    GET_STUDENTS_REQUEST, GET_STUDENTS_SUCCESS, GET_STUDENTS_FAILURE
} from "../constants/student.actionType"

const initialState = {
    students: [],
    isLoading: false,
    isSuccess: false,
    isError: false

}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STUDENTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false
            }
        case GET_STUDENTS_SUCCESS:
            return {
                ...state,
                students: action.payload,
                isSuccess: true,
                isLoading: false,
                isError: false,

            }
        case GET_STUDENTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isError: true,
                isSuccess: false
            }
        case ADD_STUDENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case ADD_STUDENT_SUCCESS:
            return {
                ...state,
                students: [...state.students, action.payload],
                isSuccess: true,
                isLoading: false,
                isError: false
            }
        case ADD_STUDENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isError: true,
                isSuccess: false,
                isLoading: false
            }
        case DELETE_STUDENT_REQUEST:
            return {
                ...state,
                isError: false,
                isSuccess: false,
                isLoading: true
            }
        case DELETE_STUDENT_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                students: [...state.students.filter(student => student.id !== action.payload)],
                isError: false,
                isSuccess: true,
                isLoading: false
            }
        case DELETE_STUDENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isError: true,
                isSuccess: false,
                isLoading: false
            }
        case UPDATE_STUDENT_REQUEST:
            return {
                ...state,
                isError: false,
                isSuccess: false,
                isLoading: true
            }
        case UPDATE_STUDENT_SUCCESS:
            return {
                ...state,
                students: state.students.map(student => {
                    if (student.id === action.payload.id) {
                        return { ...student, ...action.payload };
                    }
                    else {
                        return student;
                    }
                }),
                isError: false,
                isSuccess: true,
                isLoading: false
            };
        case UPDATE_STUDENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isError: true,
                isSuccess: false,
                isLoading: false
            }
        default:
            return state;
    }
}

export default studentReducer;