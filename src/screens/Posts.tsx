import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PostsList } from '../components/post/PostsList';
import PostView from '../components/post/PostView';

const Stack = createNativeStackNavigator();

const postsNestedBarOptions = {
    title: 'Posts',
};

const Posts = () => (
    <Stack.Navigator screenOptions={postsNestedBarOptions}>
        <Stack.Screen name="PostsList" component={PostsList} />
        <Stack.Screen name="PostView" component={PostView} />
    </Stack.Navigator>
);

export default Posts;
