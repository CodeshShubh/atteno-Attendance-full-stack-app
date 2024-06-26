import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const server = "http://localhost:4000";

export const driverAPI = createApi({
    reducerPath: 'driverApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${server}/api/v1/driver`,
        credentials: 'include',
    }),


    endpoints: (builder)=>({
        driverlogin: builder.mutation({
            query:(credentials)=>({
                 url: '/driverlogin',
                 method: 'POST',
                 body: credentials,
            }),
            transformErrorResponse:(response)=>response.data
        }),
        // fetchAttendance: builder.query({
        //     query: (driverId) => `/fetch/attendance/${driverId}`,
        //   }),
        //   markAttendance: builder.mutation({
        //     query: ({ driverId, attendanceData }) => ({
        //       url: `/add/attendance/${driverId}`,
        //       method: 'POST',
        //       body: attendanceData,
        //     }),
        //   }),
        // here we can add more endingn points
    })
})

export const  {useDriverloginMutation, useFetchAttendanceQuery, useMarkAttendanceMutation}= driverAPI;
export default useDriverloginMutation;
