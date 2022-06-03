import React from 'react';
import { View, Text } from 'react-native';
import type { PostItemType } from '../../types/Post.types';
import styles from './PostItem.style';

type Props = {
    post: PostItemType;
};

const MAX_TITLE_SIZE = 25;

export const PostItem = ({ post }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{formatTitle(post.title)}</Text>
        </View>
    );
};

const formatTitle = (title: string): string => {
    const upperCaseTitle = title.charAt(0).toUpperCase() + title.slice(1);
    return upperCaseTitle.length > MAX_TITLE_SIZE
        ? upperCaseTitle.slice(0, MAX_TITLE_SIZE) + '...'
        : upperCaseTitle;
};
