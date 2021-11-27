import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  title?: string;
  description?: string;
};

export const Header = ({ title, description }: Props) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};
