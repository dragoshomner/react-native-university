import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthorsList } from '../components/author/AuthorsList';
import { AuthorView } from '../components/author/AuthorView';

export type AuthorStackParamList = {
    AuthorsList: undefined;
    AuthorView: { authorId: number };
};

const AuthorStack = createNativeStackNavigator<AuthorStackParamList>();

const authorsListNestedBarOptions = {
    title: 'Authors',
};

const authorViewNestedBarOptions = {
    title: 'Author',
};

const Authors = () => (
    <AuthorStack.Navigator>
        <AuthorStack.Screen
            name="AuthorsList"
            component={AuthorsList}
            options={authorsListNestedBarOptions}
        />
        <AuthorStack.Screen
            name="AuthorView"
            component={AuthorView}
            options={authorViewNestedBarOptions}
        />
    </AuthorStack.Navigator>
);

export default Authors;
