import React from 'react';
import { Text, View } from 'react-native';
import { Wrapper } from '../stepper';

export default function ResumeContent() {
  return (
    <Wrapper>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Resume</Text>
      </View>
    </Wrapper>
  );
}
