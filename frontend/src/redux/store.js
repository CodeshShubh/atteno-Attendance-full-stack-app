import {configureStore} from '@reduxjs/toolkit';
import driverReducer from './reducer/driverReducer';
import AttendanceReducer from './reducer/AttendanceReducer';



export const store = configureStore({
    reducer:{
        driver: driverReducer,
        Attendance : AttendanceReducer,
    },

});

export default store;


export const server = "http://localhost:4000/api/v1";
