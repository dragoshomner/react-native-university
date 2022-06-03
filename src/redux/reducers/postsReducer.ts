import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostsListType } from '../../types/Post.types';
import { RootState } from '../store';

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

export const selectCount = (state: RootState) => state.posts;

export default postSlice.reducer;
