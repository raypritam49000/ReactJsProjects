import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentApi = createApi({

    reducerPath: 'studentApi',

    baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:3000/students' }),

    endpoints: (builder) => ({

        getAllStudents: builder.query({
            query: () => ({
                url: '/',
                method: 'GET'
            }),
        }),

        getStudentById: builder.query({
            query: (id) => {
                return {
                    url: `/${id}`,
                    method: 'GET'
                }
            },
        }),

        deleteStudentById: builder.mutation({
            query: (id) => {
                return {
                    url: `/${id}`,
                    method: 'DELETE'
                }
            },
        }),

        createStudent: builder.mutation({
            query: (student) => {
                console.log(student);
                return {
                    url: `/`,
                    method: 'POST',
                    body: student,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                }
            },
        }),

        updateStudent: builder.mutation({
            query: (student) => {
                const { id, ...data } = student;
                console.log("Id =>" + id);
                console.log("Data =>" + JSON.stringify(data));
                return {
                    url: `/${id}`,
                    method: 'PUT',
                    body: data,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                }
            },
        }),

    }),
});

export const { useGetAllStudentsQuery, useGetStudentByIdQuery, useCreateStudentMutation,
    useUpdateStudentMutation, useDeleteStudentByIdMutation } = studentApi;