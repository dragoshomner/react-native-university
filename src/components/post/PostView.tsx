import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostView = () => {
    return (
        <View style={styles.container}>
            <Text>Post View</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PostView;
