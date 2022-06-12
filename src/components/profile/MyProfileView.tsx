import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
import styles from './MyProfileView.style';
import Video from 'react-native-video';
import auth from '@react-native-firebase/auth';
import GdprVideo from './videoplayback.mp4';
import { ShareDialog, ShareLinkContent } from 'react-native-fbsdk-next';

export const MyProfileView = () => {
    const { authUser, setAuthUser } = useAuthContext();
    const [videoIsPaused, setVideoIsPause] = React.useState(true);

    // Build up a shareable link.
    const shareLinkContent = {
        contentType: 'link',
        contentUrl: 'https://reactnativeuniversity.page.link/H3Ed',
    } as ShareLinkContent;

    const onSignOut = () => {
        auth().signOut();
        setAuthUser(null);
    };

    // Share the link using the share dialog.
    function shareLinkWithShareDialog() {
        ShareDialog.canShow(shareLinkContent)
            .then(function (canShow) {
                if (canShow) {
                    return ShareDialog.show(shareLinkContent);
                }
            })
            .then(
                function (result) {
                    if (result?.isCancelled) {
                        console.log('Share cancelled');
                    } else {
                        console.log(
                            'Share success with postId: ' + result?.postId,
                        );
                    }
                },
                function (error) {
                    console.log('Share fail with error: ' + error);
                },
            );
    }

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

            <View style={styles.viewGdpr}>
                <Button
                    title="Share App"
                    onPress={() => shareLinkWithShareDialog()}
                />
            </View>
        </View>
    );
};
