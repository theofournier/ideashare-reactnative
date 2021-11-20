import React from 'react';
import { View, Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { navigate } from '../../navigation/navigationService';
import { RouteName } from '../../navigation/types';
import { onLogOut } from '../../store/auth/action';

export const HomeScreen = () => {
  const { isAuthenticated, user } = useTypedSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {!isAuthenticated && (
        <Button title="Auth" onPress={() => navigate(RouteName.Auth)} />
      )}
      {isAuthenticated && (
        <View>
          <Text>{user?.id}</Text>
          <Text>{user?.info.email}</Text>
          <Text>{user?.info.firstname}</Text>
          <Text>{user?.info.lastname}</Text>
          <Text>{user?.info.photoUrl}</Text>
          <Button title="Sign Out" onPress={() => dispatch(onLogOut())} />
        </View>
      )}
    </View>
  );
};
