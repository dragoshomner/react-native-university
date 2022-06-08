import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { ColorValue } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Posts from '../screens/Posts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Authors from '../screens/Authors';
import { MyProfile } from '../screens/MyProfile';

type TabBarIconType = {
    color: number | ColorValue | undefined;
    size: number | undefined;
};

const tabBarOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#9381ff',
    headerShown: false,
};

const Tab = createBottomTabNavigator();

export const AuthRootNavigator = () => {
    return (
        <Tab.Navigator screenOptions={tabBarOptions}>
            <Tab.Screen
                name="Posts"
                component={Posts}
                options={{
                    tabBarIcon: ({ color, size }: TabBarIconType) => (
                        <MaterialIcons name="inbox" color={color} size={size} />
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
            <Tab.Screen
                name="MyProfile"
                component={MyProfile}
                options={{
                    tabBarIcon: ({ color, size }: TabBarIconType) => (
                        <MaterialIcons
                            name="person"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
