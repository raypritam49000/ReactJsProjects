import axios from "axios";
import {
  getStudentRequest, getStudentSuccess, getStudentFailure,
  deleteStudentRequest, deleteStudentSuccess, deleteStudentFailure,
  addStudentRequest, addStudentSuccess, addStudentFailure,
  updateStudentRequest, updateStudentSuccess, updateStudentFailure
} from '../features/studentSlice';

export const getAllStudent = () => async (dispatch) => {
  try {
    dispatch(getStudentRequest());
    const { data } = await axios.get(`/students`);
    console.log(data);
    dispatch(getStudentSuccess(data));

  } catch (error) {
    dispatch(getStudentFailure(error.response.data.message));
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    dispatch(deleteStudentRequest());
    const { data } = await axios.delete(`/students/${id}`);
    dispatch(deleteStudentSuccess(id));
  }
  catch (error) {
    dispatch(deleteStudentFailure(error.response.data.message));
  }
};

export const addStudent = (student) => async (dispatch) => {
  try {
    dispatch(addStudentRequest());
    const { data } = await axios.post(`/students`, student, { headers: { "Content-Type": "application/json" } });
    dispatch(addStudentSuccess(data));
  }
  catch (error) {
    dispatch(addStudentFailure(error.response.data.message));
  }
};

export const updateStudent = (id, student) => async (dispatch) => {
  try {
    dispatch(updateStudentRequest());
    const { data } = await axios.put(`/students/${id}`, student, { headers: { "Content-Type": "application/json" } });
    dispatch(updateStudentSuccess(data));
  }
  catch (error) {
    dispatch(updateStudentFailure(error.response.data.message));
  }
};