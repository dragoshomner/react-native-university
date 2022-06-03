import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Movies from '../screens/Posts';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator();

const tabBarOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#9381ff',
};

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={tabBarOptions}>
                <Tab.Screen
                    name="Movies"
                    component={Movies}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons
                                name="movie-filter"
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
                        tabBarIcon: ({ color, size }) => (
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
