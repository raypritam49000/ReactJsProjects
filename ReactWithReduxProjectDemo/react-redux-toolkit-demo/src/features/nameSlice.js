import { createSlice } from '@reduxjs/toolkit';

const iState = "Pritam Ray";

export const nameSlice = createSlice({
    name: 'name',
    initialState: iState,
    reducers: {

        changeName: (state) => {
          return state = "Omi Verma"
        }

    }


})


export const { changeName } = nameSlice.actions;
export default nameSlice.reducer;