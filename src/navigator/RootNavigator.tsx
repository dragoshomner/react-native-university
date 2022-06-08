import React from 'react';
import {
    NavigationContainer,
    NavigatorScreenParams,
} from '@react-navigation/native';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Authors, { AuthorStackParamList } from '../screens/Authors';
import { ColorValue } from 'react-native';
import Posts, { PostStackParamList } from '../screens/Posts';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';
import { useAuthContext } from '../context/AuthContext';

export type RootStackParamList = {
    Posts: NavigatorScreenParams<PostStackParamList>;
    Authors: NavigatorScreenParams<AuthorStackParamList>;
};

type TabBarIconType = {
    color: number | ColorValue | undefined;
    size: number | undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const tabBarOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#9381ff',
    headerShown: false,
};

const RootNavigator = () => {
    const { authUser } = useAuthContext();

    return (
        <NavigationContainer>
            {authUser ? (
                <Tab.Navigator screenOptions={tabBarOptions}>
                    <Tab.Screen
                        name="Posts"
                        component={Posts}
                        options={{
                            tabBarIcon: ({ color, size }: TabBarIconType) => (
                                <MaterialIcons
                                    name="inbox"
                                    color={color}
                                    size={size}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Authors"
                        component={Authors}
                        options={{
                            tabBarIcon: ({ color, size }: TabBarIconType) => (
                                <MaterialIcons
                                    name="groups"
                                    color={color}
                                    size={size}
                                />
                            ),
                        }}
                    />
                </Tab.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen name="SignIn" component={SignIn} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};

export default RootNavigator;
