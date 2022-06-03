import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PostsList } from '../components/post/PostsList';
import PostView from '../components/post/PostView';

export type PostStackParamList = {
    PostsList: undefined;
    PostView: { postId: number };
};

const PostStack = createNativeStackNavigator<PostStackParamList>();

const postsNestedBarOptions = {
    title: 'Posts',
};

const Posts = () => (
    <PostStack.Navigator screenOptions={postsNestedBarOptions}>
        <PostStack.Screen name="PostsList" component={PostsList} />
        <PostStack.Screen name="PostView" component={PostView} />
    </PostStack.Navigator>
);

export default Posts;
