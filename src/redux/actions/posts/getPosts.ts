import axios from 'axios';
import { Dispatch } from 'react';
import { DispatchPayload } from '../../../types/Dispatch.types';
import { PostsList } from '../../../types/Post.types';
import { API_BASE, GET_POSTS } from '../actions';

export const getPosts = () => {
    try {
        return async (dispatch: Dispatch<DispatchPayload<PostsList>>) => {
            const res = await axios.get(`${API_BASE}/posts`);

            if (res.data) {
                dispatch({
                    type: GET_POSTS,
                    payload: res.data,
                });
            } else {
                console.log('Unable to fetch');
            }
        };
        // eslint-disable-next-line no-unreachable
    } catch (error) {
        // Add custom logic to handle errors
    }
};
