import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MyProfileView } from '../components/profile/MyProfileView';

export type MyProfileStackParamList = {
    MyProfile: undefined;
};

const MyProfileStack = createNativeStackNavigator<MyProfileStackParamList>();

const myProfileNestedBarOptions = {
    title: 'My Profile',
};

export const MyProfile = () => {
    return (
        <MyProfileStack.Navigator>
            <MyProfileStack.Screen
                name="MyProfile"
                component={MyProfileView}
                options={myProfileNestedBarOptions}
            />
        </MyProfileStack.Navigator>
    );
};
