import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { PostItemType } from '../../types/Post.types';
import styles from './PostItem.style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';

type Props = {
    data: PostItemType;
};

const MAX_TITLE_SIZE = 75;
const MAX_BODY_SIZE = 100;

export const PostItem = ({ data }: Props) => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() =>
                navigation.navigate('Posts', {
                    screen: 'PostView',
                    initial: false,
                    params: {
                        postId: data.id,
                    },
                })
            }>
            <Text style={styles.title}>{formatTitle(data.title)}</Text>
            <Text style={styles.body}>{formatBody(data.body)}</Text>
        </TouchableOpacity>
    );
};

const shrinkText = (text: string, maxSize: number) =>
    text.length > MAX_TITLE_SIZE ? text.slice(0, maxSize) + '...' : text;

const formatTitle = (title: string): string => {
    const upperCaseTitle = title.charAt(0).toUpperCase() + title.slice(1);
    return shrinkText(upperCaseTitle, MAX_TITLE_SIZE);
};

const formatBody = (body: string) =>
    shrinkText(body.replace(/\n/g, ' '), MAX_BODY_SIZE);
