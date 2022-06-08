import React from 'react';
import { Button, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import styles from './FacebookSignIn.style';
import { useAuthContext } from '../../context/AuthContext';

export const FacebookSignIn = () => {
    const { setAuthUser } = useAuthContext();

    async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions([
            'public_profile',
            'email',
        ]);

        if (result.isCancelled) {
            console.log('User cancelled the login process');
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            console.log('Something went wrong obtaining access token');
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(
            data!.accessToken,
        );

        // Sign-in the user with the credential
        return await auth().signInWithCredential(facebookCredential);
    }

    const onPressHandler = () => {
        onFacebookButtonPress()
            .then(() => {
                const myUser = {
                    email: auth().currentUser?.email,
                    name: auth().currentUser?.displayName,
                    photo: auth().currentUser?.photoURL,
                };
                setAuthUser(myUser);
            })
            .catch(error => console.log(error));
    };

    return (
        <View style={styles.container}>
            <Button title="Facebook Sign-In" onPress={onPressHandler} />
        </View>
    );
};
