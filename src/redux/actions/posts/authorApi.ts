import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthorItemType, AuthorListType } from '../../../types/Author.types';
import { API_BASE, GET_AUTHORS } from '../actions';

export const authorApi = createApi({
    reducerPath: GET_AUTHORS,
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
    endpoints: builder => ({
        getAuthors: builder.query<AuthorListType, void>({
            query: () => '/users',
        }),
        getAuthorById: builder.query<AuthorItemType, number>({
            query: id => `/users/${id}`,
        }),
    }),
});

export const { useGetAuthorByIdQuery, useGetAuthorsQuery } = authorApi;
