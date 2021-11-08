import { AddPostScreen } from '../../screens/add-post';
import { HomeScreen } from '../../screens/home';
import { ProfileScreen } from '../../screens/profile';
import React from 'react';
import { RootStackParamList } from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const MainTabs = createBottomTabNavigator<RootStackParamList>();

const MainTabsNavigator = () => (
  <MainTabs.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}>
    <MainTabs.Screen name="Home" component={HomeScreen} />
    <MainTabs.Screen name="AddPost" component={AddPostScreen} />
    <MainTabs.Screen name="Profile" component={ProfileScreen} />
  </MainTabs.Navigator>
);

const Main = createStackNavigator();

export const MainNavigator = () => (
  <Main.Navigator screenOptions={{ headerShown: false }}>
    <Main.Screen name="MainTabsNavigator" component={MainTabsNavigator} />
  </Main.Navigator>
);
