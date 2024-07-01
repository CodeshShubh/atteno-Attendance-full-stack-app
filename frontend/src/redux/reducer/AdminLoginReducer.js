import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    isAuthenticated: false,
    error: null,
    message: null,
    user: null,
};


export const AdminLoginReducer = createSlice({
    name: "AdminLogin",
    initialState,
    reducers:{
        setLoading:(state, action)=>{
           state.loading = action.payload;
        },
        setisAuthenticated:(state, action)=>{
             state.isAuthenticated = action.payload;
        },
        setError:(state, action)=>{
            state.error = action.payload
        },
        clearError:(state)=>{
            state.error = null
        },
        setMessage:(state, action)=>{
            state.message = action.payload;
        },
        clearMessage:(state)=>{
            state.message = null
        },
        setUser:(state, action)=>{
            state.action = action.payload;
        }
    }

})

export const {setLoading, setisAuthenticated, setError, clearError, setMessage, clearMessage, setUser} = AdminLoginReducer.actions;

export default AdminLoginReducer.reducer