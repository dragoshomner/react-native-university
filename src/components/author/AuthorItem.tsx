import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
                navigation.navigate('Authors', {
                    screen: 'AuthorView',
                    initial: false,
                    params: {
                        authorId: author.id,
                    },
                })
            }>
            <Text style={styles.title}>{author.name}</Text>
            <Text style={styles.body}>
                <MaterialIcons name="mail" />
                {'  '}
                {author.email}
            </Text>
            <Text style={styles.body}>
                <MaterialIcons name="business-center" />
                {'  '}
                {author.company.name}
            </Text>
        </TouchableOpacity>
    );
};
