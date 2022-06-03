import React from 'react';
import { View, Text } from 'react-native';
import type { PostItemType } from '../../types/Post.types';
import styles from './PostItem.style';

type Props = {
    post: PostItemType;
};

const MAX_TITLE_SIZE = 75;
const MAX_BODY_SIZE = 100;

export const PostItem = ({ post }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{formatTitle(post.title)}</Text>
            <Text style={styles.body}>{formatBody(post.body)}</Text>
        </View>
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
