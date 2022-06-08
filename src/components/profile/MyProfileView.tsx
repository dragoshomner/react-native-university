import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
import styles from './MyProfileView.style';
import auth from '@react-native-firebase/auth';

export const MyProfileView = () => {
    const { authUser, setAuthUser } = useAuthContext();

    const onSignOut = () => {
        auth().signOut();
        setAuthUser(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{authUser?.name}</Text>
            <Text style={styles.text}>{authUser?.email}</Text>
            <Button title="Sign Out" onPress={onSignOut} />
        </View>
    );
};
