import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import axios from "axios";
import { server } from '../store';


export const driverAPI = createApi({
    reducerPath : "driverApi",
    baseQuery: fetchBaseQuery({
        baseUrl: ` ${server}/api/v1/driver`,
    }),
    endpoints: (builder)=>({
        allDrivers : builder.query({
            query: ()=> '', //No specific query parameters needed for fetching all users
            transformErrorResponse : (response)=>response.data,
        }),
        // Define more endpoints as needed
    }),
});


export const {useAllDriversQuery}= driverAPI;

export default driverAPI;