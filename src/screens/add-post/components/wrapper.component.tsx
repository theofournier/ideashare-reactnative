import React from 'react';
import { View } from 'react-native';
import { Footer } from './footer.component';
import { Header } from './header.component';

type Props = {
  children: React.ReactElement;
  title?: string;
  description?: string;
  previous?: () => void;
  next?: () => void;
  save?: () => void;
};

export default function Wrapper({
  children,
  title,
  description,
  previous,
  next,
  save,
}: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header title={title} description={description} />
      {children}
      <Footer previous={previous} next={next} save={save} />
    </View>
  );
}
