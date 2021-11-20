import { SafeAreaView, StyleSheet } from 'react-native';

import { MainNavigator, AuthNavigator } from './navigators';
import React from 'react';
import { RootStackParamList, RouteName } from './types';
import { createStackNavigator } from '@react-navigation/stack';
import { useTypedSelector } from '../hooks/useTypedSelector';

const App = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const { isAuthenticated } = useTypedSelector(state => state.auth);
  return (
    <SafeAreaView style={styles.safeArea}>
      <App.Navigator screenOptions={{ headerShown: false }}>
        <App.Screen name={RouteName.MainNavigator} component={MainNavigator} />

        {!isAuthenticated && (
          <App.Screen
            name={RouteName.AuthNavigator}
            component={AuthNavigator}
          />
        )}
      </App.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
