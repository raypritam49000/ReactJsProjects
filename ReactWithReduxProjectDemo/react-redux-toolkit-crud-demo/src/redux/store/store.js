import { configureStore } from "@reduxjs/toolkit";

import { studentReducer } from "../reducers/student.reducer";

const store = configureStore({
    reducer: {
        student: studentReducer
    }
});

export default store;
