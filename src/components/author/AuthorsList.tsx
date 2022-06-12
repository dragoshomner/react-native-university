import React from 'react';
import { View } from 'react-native';
import { useGetAuthorsQuery } from '../../redux/actions/posts/authorApi';
import AnimatedFlatList from '../utils/AnimatedFlatList';
import { LoadingIndicator } from '../utils/LoadingIndicator';
import { AuthorItem } from './AuthorItem';
import styles from './AuthorsList.style';

export const AuthorsList = () => {
    const { data, isLoading } = useGetAuthorsQuery();

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.postsListContainer}>
                <AnimatedFlatList data={data} ChildComponent={AuthorItem} />
            </View>
        </View>
    );
};
