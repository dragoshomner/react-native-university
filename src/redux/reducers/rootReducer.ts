import { postsApi } from '../actions/posts/getPosts';

export const rootReducer = {
    [postsApi.reducerPath]: postsApi.reducer,
};
