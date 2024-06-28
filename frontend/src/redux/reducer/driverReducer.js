import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loading: false,
    error: null,
    isAuthenticated:false,
    message:null
};

export const driverReducer = createSlice({
    name: 'driverReducer',
    initialState,
    reducers: {
        loginRequest:(state)=>{
            state.loading = true;
            state.isAuthenticated=false;
            state.error =null; 
        },
        loginSuccess:(state,action)=>{
            state.loading =false;
            state.isAuthenticated=true;
            state.user = action.payload.data;
            state.message=action.payload.message;
        },
        loginFail:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=false
            state.error=action.payload.message;
        },
        clearError: state => {
            state.error = null;
          },
          clearMessage: state => {
            state.message = null;
          },
    },
});

export const { loginRequest, loginSuccess, loginFail, clearError, clearMessage } = driverReducer.actions;
export default driverReducer.reducer;
