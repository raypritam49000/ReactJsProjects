import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    color: "",
}

export const themeSlice = createSlice({
    name: 'color',
    initialState: initialStateValue,
    reducers: {
        changeThemeColor: (state, action) => {
            state.color = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeThemeColor } = themeSlice.actions;

export default themeSlice.reducer;