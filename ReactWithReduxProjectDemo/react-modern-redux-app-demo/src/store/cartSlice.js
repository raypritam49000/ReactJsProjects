import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {

        add(state, action) {
            //Redux
            // return [...state,action.payload];
            state.push(action.payload);
        },
        
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        }
    }
});

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;