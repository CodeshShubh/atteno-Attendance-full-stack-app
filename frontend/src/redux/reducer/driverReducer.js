import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user:JSON.parse(localStorage.getItem('user')) || null,
    loading: false,

};

export const driverReducer = createSlice({
    name: 'driverReducer',
    initialState,
    reducers: {
        setUserLoading:(state)=>{
            state.loading = true;
            state.error =null; 
        },
        setUser:(state,action)=>{
            state.loading =false;
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        setUserError:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }

    },
});

export const {
       setUserLoading,
        setUser,
        setUserError } = driverReducer.actions;
export default driverReducer.reducer;
