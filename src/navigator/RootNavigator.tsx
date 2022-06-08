import React from 'react';
import {
    NavigationContainer,
    NavigatorScreenParams,
} from '@react-navigation/native';
import { AuthorStackParamList } from '../screens/Authors';
import { PostStackParamList } from '../screens/Posts';
import { useAuthContext } from '../context/AuthContext';
import { AuthRootNavigator } from './AuthRootNavigator';
import { NoAuthRootNavigator } from './NoAuthRootNavigator';

export type RootStackParamList = {
    Posts: NavigatorScreenParams<PostStackParamList>;
    Authors: NavigatorScreenParams<AuthorStackParamList>;
};

const RootNavigator = () => {
    const { authUser } = useAuthContext();

    return (
        <NavigationContainer>
            {authUser ? <AuthRootNavigator /> : <NoAuthRootNavigator />}
        </NavigationContainer>
    );
};

export default RootNavigator;
