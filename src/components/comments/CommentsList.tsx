import React from 'react';
import { Button, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useGetPostCommentsQuery } from '../../redux/actions/posts/postsApi';
import { LoadingIndicator } from '../utils/LoadingIndicator';
import { CommentItem } from './CommentItem';

type Props = {
    postId: number;
};

export const CommentsList = ({ postId }: Props) => {
    const [showComments, setShowComments] = React.useState(false);
    const { data, isLoading } = useGetPostCommentsQuery(postId, {
        skip: !showComments,
    });

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return showComments ? (
        <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            maxToRenderPerBatch={10}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <CommentItem comment={item} />}
        />
    ) : (
        <Button title="Show comments" onPress={() => setShowComments(true)} />
    );
};
