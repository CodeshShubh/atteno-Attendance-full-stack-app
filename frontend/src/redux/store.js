import {configureStore} from '@reduxjs/toolkit';
import driverReducer from './reducer/driverReducer';



export const store = configureStore({
    reducer:{
        driver: driverReducer,
    },

});

export default store;


export const server = "http://localhost:4000/api/v1";
