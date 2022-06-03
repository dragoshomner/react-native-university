import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostItemType, PostsListType } from '../../../types/Post.types';
import { API_BASE, GET_POSTS } from '../actions';

export const postsApi = createApi({
    reducerPath: GET_POSTS,
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
    endpoints: builder => ({
        getPosts: builder.query<PostsListType, void>({
            query: () => '/posts',
        }),
        getPostById: builder.query<PostItemType, number>({
            query: id => `/posts/${id}`,
        }),
    }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;
