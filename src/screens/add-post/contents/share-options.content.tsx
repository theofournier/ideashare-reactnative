import React from 'react';
import { Text, View } from 'react-native';
import { Wrapper } from '../components';

export default function ShareOptionsContent() {
  return (
    <Wrapper>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Share options</Text>
      </View>
    </Wrapper>
  );
}
