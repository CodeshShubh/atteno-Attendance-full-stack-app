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
            state.error=action.payload
        },
        loadUserRequest:(state)=>{
            state.loading = true;
           
        },
        loadUserSuccess:(state,action)=>{
            state.loading =false;
            state.isAuthenticated=true;
            state.user = action.payload;
        },
        loadUserFail:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=false
            state.error=action.payload;
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
