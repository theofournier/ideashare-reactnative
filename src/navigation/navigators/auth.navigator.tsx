import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthScreen, SignInScreen, SignUpScreen } from '../../screens/auth';
import { RootStackParamList, RouteName } from '../types';

const Auth = createStackNavigator<RootStackParamList>();

export const AuthNavigator = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen name={RouteName.Auth} component={AuthScreen} />
      <Auth.Screen name={RouteName.SignIn} component={SignInScreen} />
      <Auth.Screen name={RouteName.SignUp} component={SignUpScreen} />
    </Auth.Navigator>
  );
};
