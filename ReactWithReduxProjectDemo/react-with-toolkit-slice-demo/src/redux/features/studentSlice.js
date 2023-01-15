import { createSlice } from '@reduxjs/toolkit';

const initialState = {}

export const studentSlice = createSlice({
    name: 'student',
    initialState: initialState,
    reducers: {

        getStudentRequest: (state) => {
            state.loading = true;
        },
        getStudentSuccess: (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.students = action.payload;
        },
        getStudentFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteStudentRequest: (state) => {
            state.loading = true;
        },
        deleteStudentSuccess: (state, action) => {
            state.loading = false;
            state.students = [...state.students.filter(student => student.id !== action.payload)];
        },
        deleteStudentFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addStudentRequest: (state) => {
            state.loading = true;
        },
        addStudentSuccess: (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.students = [...state.students, action.payload];
        },
        addStudentFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateStudentRequest: (state) => {
            state.loading = true;
        },
        updateStudentSuccess: (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.students = state.students.map(student => (student.id === action.payload.id) ? { ...student, ...action.payload } : student);
        },
        updateStudentFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }


})


export const {
    getStudentRequest, getStudentSuccess, getStudentFailure,
    deleteStudentRequest, deleteStudentSuccess, deleteStudentFailure,
    addStudentRequest, addStudentSuccess, addStudentFailure,
    updateStudentRequest, updateStudentSuccess, updateStudentFailure
} = studentSlice.actions;
export default studentSlice.reducer;