import React from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { onLogin } from '../../store/auth/action';

export const SignInScreen = () => {
  const dispatch = useDispatch();
  const {
    login: { isLoggingIn, error },
  } = useTypedSelector(state => state.auth);

  if (isLoggingIn) {
    return <ActivityIndicator />;
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button
        title="Sign In"
        onPress={() =>
          dispatch(onLogin({ email: 't@t.com', password: '0000001' }))
        }
      />
      <Text>{error && error.message}</Text>
    </View>
  );
};
