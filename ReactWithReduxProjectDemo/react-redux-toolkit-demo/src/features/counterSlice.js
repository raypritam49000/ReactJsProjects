import { createSlice } from '@reduxjs/toolkit';

const iState = 0;

export const counterSlice = createSlice({
    name: 'count',
    initialState: iState,
    reducers: {

        Increment: (state, action) => {
            // return state = state + 1;
            if (action.payload.type === 'INCREMENT') {
                return state = state + action.payload.payload;
            }
        },

        Decrement: (state, action) => {
            if (action.payload.type === 'DECREMENT') {
                return state = state - action.payload.payload;
            }
            // return state = state - 1;
        }
    }


})


export const { Increment, Decrement } = counterSlice.actions;
export default counterSlice.reducer;