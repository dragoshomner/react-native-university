import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useGetAuthorByIdQuery } from '../../redux/actions/posts/authorApi';
import { AuthorStackParamList } from '../../screens/Authors';
import { AuthorItemType } from '../../types/Author.types';
import { LoadingIndicator } from '../utils/LoadingIndicator';
import { AuthorPosts } from './AuthorPosts';
import styles from './AuthorView.style';

type Props = NativeStackScreenProps<AuthorStackParamList, 'AuthorView'>;

type AuthorHeaderProps = {
    data: AuthorItemType;
};

const AuthorViewHeader = ({ data }: AuthorHeaderProps) => {
    return data ? (
        <View style={styles.container}>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.authorDetail}>
                <MaterialIcons name="mail" style={styles.authorIcon} />
                {'  '}
                {data.email}
            </Text>
            <Text style={styles.authorDetail}>
                <MaterialIcons
                    name="business-center"
                    style={styles.authorIcon}
                />
                {'  '}
                {data.company.name} - {data.company.catchPhrase}
            </Text>
            <Text style={styles.authorDetail}>
                <MaterialIcons name="call" style={styles.authorIcon} />
                {'  '}
                {data.phone}
            </Text>
            <Text style={styles.authorDetail}>
                <MaterialIcons name="wifi" style={styles.authorIcon} />
                {'  '}
                {data.website}
            </Text>
            <View style={styles.address}>
                <Text>Street: {data.address.street}</Text>
                <Text>Suite: {data.address.suite}</Text>
                <Text>City: {data.address.city}</Text>
                <Text>Zipcode: {data.address.zipcode}</Text>
            </View>
            <View style={styles.postsContainer}>
                <Text style={styles.postTitle}>Posts</Text>
            </View>
        </View>
    ) : (
        <View />
    );
};

export const AuthorView = ({ route }: Props) => {
    const authorId = route.params.authorId;
    const { data, isLoading } = useGetAuthorByIdQuery(authorId);

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return data ? (
        <AuthorPosts
            authorId={data.id}
            headerComponent={<AuthorViewHeader data={data} />}
        />
    ) : (
        <View />
    );
};
