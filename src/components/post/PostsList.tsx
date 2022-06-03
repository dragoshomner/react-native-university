import React from 'react';
import { View, FlatList } from 'react-native';
import { useGetPostsQuery } from '../../redux/actions/posts/postsApi';
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
                <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    maxToRenderPerBatch={10}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <PostItem post={item} />}
                />
            </View>
        </View>
    );
};
