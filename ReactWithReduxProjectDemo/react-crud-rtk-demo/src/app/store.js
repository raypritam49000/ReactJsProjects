import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { studentApi } from '../services/student';

export const store = configureStore({
      // Add the generated reducer as a specific top-level slice
    reducer: {
        [studentApi.reducerPath]: studentApi.reducer
    },
     // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(studentApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);