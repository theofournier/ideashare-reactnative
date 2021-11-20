import React from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { onRegister } from '../../store/auth/action';

export const SignUpScreen = () => {
  const dispatch = useDispatch();
  const {
    register: { isRegisteringIn, error },
  } = useTypedSelector(state => state.auth);

  if (isRegisteringIn) {
    return <ActivityIndicator />;
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button
        title="Sign Up"
        onPress={() =>
          dispatch(
            onRegister({
              email: 't10@t.com',
              password: '000000',
              firstname: 'T',
              lastname: 'T',
            }),
          )
        }
      />
      <Text>{error && error.message}</Text>
    </View>
  );
};
