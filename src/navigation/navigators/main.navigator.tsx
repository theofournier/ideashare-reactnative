import React from 'react';
import { RootStackParamList, RouteName } from '../types';
import { createStackNavigator } from '@react-navigation/stack';
import { MainTabsNavigator } from './main-tabs.navigator';
import { AddPostNavigator } from './add-post.navigator';

const Main = createStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen
        name={RouteName.MainTabsNavigator}
        component={MainTabsNavigator}
      />
      <Main.Screen
        name={RouteName.AddPostNavigator}
        component={AddPostNavigator}
      />
    </Main.Navigator>
  );
};
