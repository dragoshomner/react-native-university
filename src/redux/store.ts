import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './actions/posts/getPosts';
import { rootReducer } from './reducers/rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;