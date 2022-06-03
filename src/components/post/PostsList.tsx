import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/actions/actions';
import type { RootState } from '../../redux/reducers/rootReducer';
import { PostItem } from './PostItem';
import styles from './PostsList.style';

export const PostsList = () => {
    const { posts } = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();
    const fetchMovies = React.useCallback(
        () => dispatch(getPosts()),
        [dispatch],
    );

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    return (
        <View style={styles.container}>
            <View style={styles.postsListContainer}>
                <FlatList
                    data={posts}
                    keyExtractor={item => item.id.toString()}
                    maxToRenderPerBatch={10}
                    renderItem={({ item }) => <PostItem post={item} />}
                />
            </View>
        </View>
    );
};
