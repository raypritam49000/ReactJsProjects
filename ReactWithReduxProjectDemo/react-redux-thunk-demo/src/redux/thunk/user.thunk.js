import { getAllStudents,createStudent,deleteStudent,updateStudent } from "../../service/student.service";
import { 
getStudentSuccess,getStudentRequest,getStudentsFailure,
addStudentSuccess,addStudentFailure,addStudentRequest,
deleteStudentSuccess,deleteStudentFailure,deleteStudentRequest,
updateStudentRequest,updateStudentSuccess,updateStudentFailure
} from './../action/student.action';


export const getStudentThunk = () => {
    return async (dispatch) => {
        dispatch(getStudentRequest());
        return getAllStudents().then((response) => {
            dispatch(getStudentSuccess(response?.data));
        }).catch((error) =>  dispatch(getStudentsFailure(error)));
    };
}

export const addStudentThunk = (student) => {
    return async (dispatch) => {
        dispatch(addStudentRequest());
        return createStudent(student).then((response) => {
            dispatch(addStudentSuccess(response?.data));
        }).catch((error) =>  dispatch(addStudentFailure(error)));
    };
}

export const deleteStudentThunk = (id) => {
    return async (dispatch) => {
        dispatch(deleteStudentRequest());
        return deleteStudent(id).then((response) => {
            dispatch(deleteStudentSuccess(id));
        }).catch((error) =>  dispatch(deleteStudentFailure(error)));
    };
}

export const updareStudentThunk = (student) => {
    return async (dispatch) => {
        const {id,...others} = student;
        dispatch(updateStudentRequest());
        return updateStudent(id,others).then((response) => {
            dispatch(updateStudentSuccess(response?.data));
        }).catch((error) =>  dispatch(updateStudentFailure(error)));
    };
}