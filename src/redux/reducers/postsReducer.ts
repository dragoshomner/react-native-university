import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostsListType } from '../../types/Post.types';

interface PostState {
    posts: PostsListType;
}

const initialState: PostState = {
    posts: [],
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPosts: (state, action: PayloadAction<PostsListType>) => {
            state.posts = action.payload;
        },
    },
});

export const { getPosts } = postSlice.actions;

export default postSlice.reducer;
