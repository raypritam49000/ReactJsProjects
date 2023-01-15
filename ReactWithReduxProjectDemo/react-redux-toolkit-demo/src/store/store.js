import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counterSlice';
import nameSlice from '../features/nameSlice'


const store = configureStore({

    reducer: {
        name: nameSlice,
        counter:counterSlice
    }
})

export default store;