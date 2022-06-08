import React from 'react';
import { View } from 'react-native';
import { FacebookSignIn } from '../components/facebook/FacebookSignIn';

export const SignIn = () => {
    return (
        <View style={viewStyle}>
            <FacebookSignIn />
        </View>
    );
};

const viewStyle = {
    flex: 1,
};
