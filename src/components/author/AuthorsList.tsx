import React from 'react';
import { FlatList, View } from 'react-native';
import { useGetAuthorsQuery } from '../../redux/actions/posts/authorApi';
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
                <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    maxToRenderPerBatch={10}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <AuthorItem author={item} />}
                />
            </View>
        </View>
    );
};
