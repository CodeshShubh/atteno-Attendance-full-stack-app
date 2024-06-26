import { configureStore } from '@reduxjs/toolkit';
import driverAPI from './api/driverAPI'; // Correct the import path if necessary
// import driverReducer from './reducer/driverReducer';

export const store = configureStore({
    reducer: {
        [driverAPI.reducerPath]: driverAPI.reducer,
        // driver: driverReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(driverAPI.middleware),
});
