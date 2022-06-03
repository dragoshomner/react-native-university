import React from 'react';
import { View, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useGetPostByIdQuery } from '../../redux/actions/posts/postsApi';
import type { PostStackParamList } from '../../screens/Posts';
import styles from './PostView.style';
import { LoadingIndicator } from '../utils/LoadingIndicator';

type Props = NativeStackScreenProps<PostStackParamList, 'PostView'>;

const PostView = ({ route }: Props) => {
    const { data, isLoading } = useGetPostByIdQuery(route.params.postId);

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return data ? (
        <View style={styles.container}>
            <Text style={styles.title}>{formatTitle(data.title)}</Text>
            <Text style={styles.content}>{data.body}</Text>
        </View>
    ) : (
        <View />
    );
};

const formatTitle = (title: string): string =>
    title.charAt(0).toUpperCase() + title.slice(1);

export default PostView;
