import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostsListType } from '../../../types/Post.types';
import { API_BASE, GET_POSTS } from '../actions';

export const postsApi = createApi({
    reducerPath: GET_POSTS,
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
    endpoints: builder => ({
        getPosts: builder.query<PostsListType, void>({
            query: () => '/posts',
        }),
    }),
});

export const { useGetPostsQuery } = postsApi;
