import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated:false,
    loading: false,
    error: null,
    message:null,    
};

export const driverReducer = createSlice({
    name: 'driver',
    initialState,
    reducers: {
        setLoading:(state,action)=>{
            state.loading = action.payload;
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
        setUser:(state,action)=>{
            state.user=action.payload;
        },
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
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

export const {setLoading, setError, clearError, setMessage, clearMessage, setUser, setAuthenticated, setMarkAttendance, setFetchAttendance } = driverReducer.actions;
export default driverReducer.reducer;
