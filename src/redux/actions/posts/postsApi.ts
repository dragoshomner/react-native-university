import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CommentsListType } from '../../../types/Comment.types';
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
        getPostComments: builder.query<CommentsListType, number>({
            query: id => `/posts/${id}/comments`,
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useGetPostCommentsQuery,
} = postsApi;
