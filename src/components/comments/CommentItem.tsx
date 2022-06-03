import React from 'react';
import { Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CommentType } from '../../types/Comment.types';
import styles from './CommentItem.style';

type Props = {
    comment: CommentType;
};

export const CommentItem = ({ comment }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{comment.name}</Text>
            <Text style={styles.user}>
                <MaterialIcons name="person" style={styles.userIcon} />
                {'  '}
                {comment.email}
            </Text>
            <Text style={styles.body}>{comment.body}</Text>
        </View>
    );
};
