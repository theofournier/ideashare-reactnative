import React from 'react';
import { Button, Text, View } from 'react-native';
import { navigate } from '../../../navigation/navigationService';
import { RouteName } from '../../../navigation/types';

export const StartAddPostScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>START ADD POST</Text>
      <Button title="Add post" onPress={() => navigate(RouteName.AddPost)} />
    </View>
  );
};
