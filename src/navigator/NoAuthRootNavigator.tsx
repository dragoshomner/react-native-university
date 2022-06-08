import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SignIn } from '../screens/SignIn';

const Stack = createNativeStackNavigator();

export const NoAuthRootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    );
};
