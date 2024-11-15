import { apiSlice } from '../api/apiSlice'


export const courseAPI = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: (data) => ({
                url: 'create-course',
                method: 'POST',
                body: data,
                credentials: 'include' as const,
            }),
        }),
        getAllCourses: builder.query({
            query: () => ({
                url: 'get-courses',
                method: 'GET',
                credentials: 'include' as const,
            }),
        }),
        getUsersAllCourses: builder.query({
            query: () => ({
                url: 'get-courses',
                method: 'GET',
                credentials: 'include' as const,
            }),
        }),
        getCoursesDetails: builder.query({
            query: (id) => ({
                url: `get-course/${id}`,
                method: "GET",
                credentials: 'include' as const,
            }),
        }),
    }),
});

export const { useCreateCourseMutation, useGetAllCoursesQuery, useGetUsersAllCoursesQuery, useGetCoursesDetailsQuery } = courseAPI;