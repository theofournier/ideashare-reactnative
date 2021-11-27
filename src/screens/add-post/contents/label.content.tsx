import React from 'react';
import { Text, View } from 'react-native';
import { Wrapper } from '../components';

export default function LabelContent() {
  return (
    <Wrapper>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Label</Text>
      </View>
    </Wrapper>
  );
}
