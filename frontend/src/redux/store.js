import {configureStore} from '@reduxjs/toolkit';
import { driverAPI } from './api/driverAPI';
import driverReducer from './reducer/driverReducer';



export const store = configureStore({
    reducer:{
        [driverAPI.reducerPath]: driverAPI.reducer,
        driver: driverReducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(driverAPI.middleware),
})