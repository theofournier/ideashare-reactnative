import React from 'react';
import { Text, View } from 'react-native';
import { Wrapper } from '../components';

export default function CategoryContent() {
  return (
    <Wrapper title="Category" description="Category description">
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Category</Text>
      </View>
    </Wrapper>
  );
}
