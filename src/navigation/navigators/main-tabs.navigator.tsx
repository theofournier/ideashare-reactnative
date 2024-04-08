import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../screens/home';
import { ProfileScreen } from '../../screens/profile';
import { RootStackParamList, RouteName } from '../types';
import { StartAddPostScreen } from '../../screens/add-post';

const MainTabs = createBottomTabNavigator<RootStackParamList>();

export const MainTabsNavigator = () => (
  <MainTabs.Navigator
    initialRouteName={RouteName.Home}
    screenOptions={{ headerShown: false }}>
    <MainTabs.Screen name={RouteName.Home} component={HomeScreen} />
    <MainTabs.Screen
      name={RouteName.StartAddPost}
      component={StartAddPostScreen}
    />
    <MainTabs.Screen name={RouteName.Profile} component={ProfileScreen} />
  </MainTabs.Navigator>
);
