import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
import styles from './MyProfileView.style';
import Video from 'react-native-video';
import auth from '@react-native-firebase/auth';
import GdprVideo from './videoplayback.mp4';

export const MyProfileView = () => {
    const { authUser, setAuthUser } = useAuthContext();
    const [videoIsPaused, setVideoIsPause] = React.useState(true);

    const onSignOut = () => {
        auth().signOut();
        setAuthUser(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{authUser?.name}</Text>
            <Text style={styles.text}>{authUser?.email}</Text>
            <Button title="Sign Out" onPress={onSignOut} />

            {!videoIsPaused && (
                <Video
                    source={GdprVideo}
                    paused={videoIsPaused}
                    style={styles.video}
                />
            )}

            <View style={styles.viewGdpr}>
                <Button
                    title={videoIsPaused ? 'View GDPR' : 'Hide GDPR'}
                    onPress={() => setVideoIsPause(!videoIsPaused)}
                />
            </View>
        </View>
    );
};
