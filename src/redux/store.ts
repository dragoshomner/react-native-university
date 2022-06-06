import { configureStore } from '@reduxjs/toolkit';
import { authorApi } from './actions/posts/authorApi';
import { postsApi } from './actions/posts/postsApi';
import { rootReducer } from './reducers/rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(postsApi.middleware)
            .concat(authorApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
