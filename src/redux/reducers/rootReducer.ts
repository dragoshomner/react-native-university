import { postsApi } from '../actions/posts/postsApi';

export const rootReducer = {
    [postsApi.reducerPath]: postsApi.reducer,
};
