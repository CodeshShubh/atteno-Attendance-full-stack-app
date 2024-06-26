import {createSlice} from '@reduxjs/toolkit';

const initialState ={
   drivers : [],
   // Define other initial state values as needed
}


export const driverReducer = createSlice({
    name: "driverReducer",
    initialState,
    reducers:{
         setDrivers : (state, actions)=>{
            state.drivers = actions.payload;
         },
         // Add more reducers as needed
    },
})



export const {setDrivers} = driverReducer.actions;
export default driverReducer.reducer;