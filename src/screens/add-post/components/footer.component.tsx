import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAddPost } from '../context';

type Props = {
  previous?: () => void;
  next?: () => void;
  save?: () => void;
};

export const Footer = ({ previous, next, save }: Props) => {
  const { stepIndex, totalStep, nextStep, previousStep, savePost } =
    useAddPost();

  const onNext = () => {
    next && next();
    nextStep();
  };
  const onPrevious = () => {
    previous && previous();
    previousStep();
  };
  const onSave = () => {
    save && save();
    savePost();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      {stepIndex > 0 && <Button title="Previous" onPress={onPrevious} />}
      <Text>
        {stepIndex + 1} / {totalStep}
      </Text>
      {stepIndex < totalStep - 1 && <Button title="Next" onPress={onNext} />}
      {stepIndex === totalStep - 1 && <Button title="Save" onPress={onSave} />}
    </View>
  );
};
