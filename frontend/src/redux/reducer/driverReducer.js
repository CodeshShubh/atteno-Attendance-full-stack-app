import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user:JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
    isAuthenticated:false,
    message:null
};

export const driverReducer = createSlice({
    name: 'driverReducer',
    initialState,
    reducers: {
        setUserLoading:(state)=>{
            state.loading = true;
            state.isAuthenticated=false;
            state.error =null; 
        },
        setUser:(state,action)=>{
            state.loading =false;
            state.isAuthenticated=true;
            state.user = action.payload;
            state.message=action.payload.message
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        setUserError:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=false
            state.error=action.payload;
        }
    },
});

export const { setUserLoading, setUser, setUserError } = driverReducer.actions;
export default driverReducer.reducer;
