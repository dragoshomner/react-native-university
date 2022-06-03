import { DispatchPayload } from '../../types/Dispatch.types';
import { PostItemType, PostsListType } from '../../types/Post.types';
import { GET_POSTS } from '../actions/actions';

const initialState = {
    posts: [],
};

type ActionType = DispatchPayload<PostItemType | PostsListType>;

function postsReducer(state = initialState, action: ActionType) {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: action.payload };
        default:
            return state;
    }
}

export default postsReducer;
