import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const server = "http://localhost:4000";

export const driverAPI = createApi({
    reducerPath: 'driverApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${server}/api/v1/driver`,
        credentials: 'include', // Add this line to include credentials
    }),
    endpoints: (builder) => ({
        allDrivers: builder.query({
            query: () => '', // No specific query parameters needed for fetching all users
            transformErrorResponse: (response) => response.data,
        }),
        driverLogin: builder.mutation({
            query: (credentials) => ({
                url: '/driverLogin',
                method: 'POST',
                body: credentials,
            }),
            transformErrorResponse: (response) => response.data,
        }),
        // Define more endpoints as needed
    }),
});

export const { useAllDriversQuery, useDriverLoginMutation } = driverAPI;

export default driverAPI;
