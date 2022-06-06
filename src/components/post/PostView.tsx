import React from 'react';
import { View, Text } from 'react-native';
import type {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useGetPostByIdQuery } from '../../redux/actions/posts/postsApi';
import type { PostStackParamList } from '../../screens/Posts';
import styles from './PostView.style';
import { LoadingIndicator } from '../utils/LoadingIndicator';
import { CommentsList } from '../comments/CommentsList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useGetAuthorByIdQuery } from '../../redux/actions/posts/authorApi';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigator/RootNavigator';

type Props = NativeStackScreenProps<PostStackParamList, 'PostView'>;

const PostView = ({ route }: Props) => {
    const postId = route.params.postId;
    const { data, isLoading } = useGetPostByIdQuery(postId);
    const { data: authorData } = useGetAuthorByIdQuery(
        data?.userId ?? skipToken,
    );

    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return data ? (
        <View style={styles.container}>
            <Text style={styles.title}>{formatTitle(data.title)}</Text>
            {authorData && (
                <Text
                    style={styles.author}
                    onPress={() =>
                        navigation.navigate('Authors', {
                            screen: 'AuthorView',
                            initial: false,
                            params: {
                                authorId: authorData.id,
                            },
                        })
                    }>
                    <MaterialIcons name="person" style={styles.authorIcon} />
                    {'  '}
                    {authorData?.name}
                </Text>
            )}
            <Text style={styles.content}>{data.body}</Text>
            <CommentsList postId={postId} />
        </View>
    ) : (
        <View />
    );
};

const formatTitle = (title: string): string =>
    title.charAt(0).toUpperCase() + title.slice(1);

export default PostView;
