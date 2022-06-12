import React from 'react';
import { View } from 'react-native';
import { useGetPostsQuery } from '../../redux/actions/posts/postsApi';
import AnimatedFlatList from '../utils/AnimatedFlatList';
import { LoadingIndicator } from '../utils/LoadingIndicator';
import { PostItem } from './PostItem';
import styles from './PostsList.style';

export const PostsList = () => {
    const { data, isLoading } = useGetPostsQuery();

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.postsListContainer}>
                <AnimatedFlatList data={data} ChildComponent={PostItem} />
            </View>
        </View>
    );
};
