import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PostsList } from '../components/post/PostsList';
import PostView from '../components/post/PostView';

export type PostStackParamList = {
    PostsList: undefined;
    PostView: { postId: number };
};

const PostStack = createNativeStackNavigator<PostStackParamList>();

const postsListNestedBarOptions = {
    title: 'Posts',
};

const postViewNestedBarOptions = {
    title: 'Post',
};

const Posts = () => (
    <PostStack.Navigator>
        <PostStack.Screen
            name="PostsList"
            component={PostsList}
            options={postsListNestedBarOptions}
        />
        <PostStack.Screen
            name="PostView"
            component={PostView}
            options={postViewNestedBarOptions}
        />
    </PostStack.Navigator>
);

export default Posts;
