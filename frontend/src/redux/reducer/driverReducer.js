import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    drivers: [],
    loading: true,
    user:null,
};

export const driverReducer = createSlice({
    name: 'driverReducer',
    initialState,
    reducers: {
        driverExist: (state, action) => {
            state.loading = false;
            state.drivers = action.payload;
        },
        driverNotExist: (state) => {
            state.loading = false;
            state.drivers = null;
        },
        setUser:(state,action)=>{
            state.user = action.payload;
        }
    },
});

export const { driverExist, driverNotExist, setUser } = driverReducer.actions;
export default driverReducer.reducer;
