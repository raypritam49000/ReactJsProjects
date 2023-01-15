import axios from "axios";

export const getAllStudent = () => async (dispatch) => {
  try {
    dispatch({ type: "getStudentRequest" });
    const { data } = await axios.get(`/students`);
    dispatch({ type: "getStudentSuccess", payload: data });

  } catch (error) {
    dispatch({ type: "getStudentFailure", payload: error.response.data.message });
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteStudentRequest" });
    const { data } = await axios.delete(`/students/${id}`);
    dispatch({ type: "deleteStudentSuccess", payload: id });
  }
  catch (error) {
    dispatch({ type: "deleteStudentFailure", payload: error.response.data.message });
  }
};

export const addStudent = (student) => async (dispatch) => {
  try {
    dispatch({ type: "addStudentRequest" });
    const { data } = await axios.post(`/students`, student, { headers: { "Content-Type": "application/json" } });
    dispatch({ type: "addStudentSuccess", payload: data });
  }
  catch (error) {
    dispatch({ type: "addStudentFailure", payload: error.response.data.message });
  }
};

export const updateStudent = (id, student) => async (dispatch) => {
  try {
    dispatch({ type: "updateStudentRequest" });
    const { data } = await axios.put(`/students/${id}`, student, { headers: { "Content-Type": "application/json" } });
    dispatch({ type: "updateStudentSuccess", payload: data });
  }
  catch (error) {
    dispatch({ type: "updateStudentFailure", payload: error.response.data.message });
  }
};