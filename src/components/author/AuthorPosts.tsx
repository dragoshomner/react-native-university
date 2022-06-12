import React from 'react';
import { FlatList } from 'react-native';
import { useGetPostsByAuthorQuery } from '../../redux/actions/posts/postsApi';
import { PostItem } from '../post/PostItem';
import { LoadingIndicator } from '../utils/LoadingIndicator';

type Props = {
    authorId: number;
    headerComponent: JSX.Element;
};

export const AuthorPosts = ({ authorId, headerComponent }: Props) => {
    const { data, isLoading } = useGetPostsByAuthorQuery(authorId);

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return (
        <FlatList
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ marginHorizontal: 20 }}
            data={data}
            keyExtractor={item => item.id.toString()}
            maxToRenderPerBatch={10}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <PostItem data={item} />}
            ListHeaderComponent={headerComponent}
        />
    );
};
