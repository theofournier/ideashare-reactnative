import React from 'react';
import { Text, View } from 'react-native';
import { Wrapper } from '../components';

export default function OptionalInfoContent() {
  return (
    <Wrapper>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Optional Info</Text>
      </View>
    </Wrapper>
  );
}
