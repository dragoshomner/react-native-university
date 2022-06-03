import React from 'react';
import { View, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useGetPostByIdQuery } from '../../redux/actions/posts/postsApi';
import type { PostStackParamList } from '../../screens/Posts';
import styles from './PostView.style';

type Props = NativeStackScreenProps<PostStackParamList, 'PostView'>;

const PostView = ({ route }: Props) => {
    const { data } = useGetPostByIdQuery(route?.params?.postId);

    return (
        <View style={styles.container}>
            <Text>{data?.title}</Text>
        </View>
    );
};

export default PostView;
