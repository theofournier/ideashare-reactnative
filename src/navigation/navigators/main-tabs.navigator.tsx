import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddPostScreen } from '../../screens/add-post';
import { HomeScreen } from '../../screens/home';
import { ProfileScreen } from '../../screens/profile';
import { RootStackParamList, RouteName } from '../types';

const MainTabs = createBottomTabNavigator<RootStackParamList>();

export const MainTabsNavigator = () => (
  <MainTabs.Navigator
    initialRouteName={RouteName.Home}
    screenOptions={{ headerShown: false }}>
    <MainTabs.Screen name={RouteName.Home} component={HomeScreen} />
    <MainTabs.Screen name={RouteName.AddPost} component={AddPostScreen} />
    <MainTabs.Screen name={RouteName.Profile} component={ProfileScreen} />
  </MainTabs.Navigator>
);
