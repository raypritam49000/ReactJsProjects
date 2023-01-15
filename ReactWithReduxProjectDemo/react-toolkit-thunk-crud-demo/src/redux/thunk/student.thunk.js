import {
    getStudentRequest, getStudentSuccess, getStudentFailure,
    deleteStudentRequest, deleteStudentSuccess, deleteStudentFailure,
    addStudentRequest, addStudentSuccess, addStudentFailure,
    updateStudentRequest, updateStudentSuccess, updateStudentFailure
} from '../features/studentSlice'

export function fetchStudents() {
    return async function fetchStudentThunk(dispatch, getState) {
        dispatch(getStudentRequest());
        try {
            const res = await fetch(`http://localhost:9999/students`);
            const data = await res.json();
            dispatch(getStudentSuccess(data));
        }
        catch (error) {
            console.log(error);
            dispatch(getStudentFailure());
        }
    }
}

export function deleteStudent(id) {
    return async function deleteStudentThunk(dispatch, getState) {
        dispatch(deleteStudentRequest());
        try {
            const res = await fetch(`http://localhost:9999/students/${id}`);
            const data = await res.json();
            dispatch(deleteStudentSuccess(id));
        }
        catch (error) {
            console.log(error);
            dispatch(deleteStudentFailure());
        }
    }
}

export function addStudent(student) {
    return async function addStudentThunk(dispatch, getState) {
        dispatch(addStudentRequest());
        try {
            const res = await fetch(`http://localhost:9999/students`,{
                method:"post",
                body: JSON.stringify(student),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });

            const data = await res.json();
            dispatch(addStudentSuccess(data));
        }
        catch (error) {
            console.log(error);
            dispatch(addStudentFailure());
        }
    }
}


export function updateStudent(id,student) {
    return async function updateStudentThunk(dispatch, getState) {
        dispatch(updateStudentRequest());
        try {
            const res = await fetch(`http://localhost:9999/students/${id}`,{
                method:"put",
                body: JSON.stringify(student),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });

            const data = await res.json();
            dispatch(updateStudentSuccess(data));
        }
        catch (error) {
            console.log(error);
            dispatch(updateStudentFailure());
        }
    }
}




