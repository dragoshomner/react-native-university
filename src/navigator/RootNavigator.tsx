import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Favorites from '../screens/Favorites';
import { ColorValue } from 'react-native';
import Posts from '../screens/Posts';

type TabBarIconType = {
    color: number | ColorValue | undefined;
    size: number | undefined;
};

const Tab = createBottomTabNavigator();

const tabBarOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#9381ff',
    headerShown: false,
};

const RootNavigator = () => {
    return (
        <NavigationContainer>
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
                    name="Favorites"
                    component={Favorites}
                    options={{
                        tabBarIcon: ({ color, size }: TabBarIconType) => (
                            <MaterialIcons
                                name="favorite"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
