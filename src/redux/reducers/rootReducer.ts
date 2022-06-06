import { authorApi } from '../actions/posts/authorApi';
import { postsApi } from '../actions/posts/postsApi';

export const rootReducer = {
    [postsApi.reducerPath]: postsApi.reducer,
    [authorApi.reducerPath]: authorApi.reducer,
};
