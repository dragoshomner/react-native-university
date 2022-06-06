import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { AuthorItemType } from '../../types/Author.types';
import styles from './AuthorItem.style';

type Props = {
    author: AuthorItemType;
};

export const AuthorItem = ({ author }: Props) => {
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
                        postId: author.id,
                    },
                })
            }>
            <Text style={styles.title}>{author.name}</Text>
            {/* <Text style={styles.body}>{formatBody(post.body)}</Text> */}
        </TouchableOpacity>
    );
};
