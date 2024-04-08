import React from 'react';
import { Button, View } from 'react-native';
import { navigate } from '../../navigation/navigationService';
import { RouteName } from '../../navigation/types';

export const AuthScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Sign In" onPress={() => navigate(RouteName.SignIn)} />
      <Button title="Sign Up" onPress={() => navigate(RouteName.SignUp)} />
    </View>
  );
};
