import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    message: null,
    error: null,
    attendance: {},
}


const driverAttendace = createSlice({
    name: 'driverAttendance',
    initialState,
    reducers:{
        setLoading: (state, action)=>{
            state.loading =action.payload;
        },
        setError:(state,action)=>{
            state.error = action.payload;
        },
        clearError:(state)=>{
            state.error = null;
        },
        setMessage:(state, action)=>{
            state.message = action.payload;
        },
        clearMessage:(state)=>{
            state.message = null;
        },
        setMarkAttendance: (state)=>{
          const { currentMonth, currentDay } = action.payload;
          if (!state.attendance[currentMonth]){
            state.attendance[currentMonth] =[];
          }
          state.attendance[currentMonth].push(currentDay);
        },
        setFetchAttendance: (state, action) => {
            state.attendance = action.payload;
        },
    },
});

export const {setLoading, setError, clearError, setMessage, clearMessage, setMarkAttendance, setFetchAttendance} = driverAttendace.actions;
export default driverAttendace.reducer