import { SafeAreaView, StyleSheet } from 'react-native';

import { MainNavigator } from './navigators/main.navigator';
import React from 'react';
import { RootStackParamList } from './types';
import { createStackNavigator } from '@react-navigation/stack';

const App = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <App.Navigator screenOptions={{ headerShown: false }}>
        <App.Screen name="MainNavigator" component={MainNavigator} />
      </App.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
