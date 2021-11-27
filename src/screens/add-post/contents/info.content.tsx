import React from 'react';
import { Text, View } from 'react-native';
import { Wrapper } from '../stepper';

export default function InfoContent() {
  return (
    <Wrapper>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Info</Text>
      </View>
    </Wrapper>
  );
}
