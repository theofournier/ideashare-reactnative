import React from 'react';
import { Button, Text, View } from 'react-native';
import { useStepper } from './context';

type Props = {
  previous?: () => void;
  next?: () => void;
  save?: () => void;
};

export const Footer = ({ previous, next, save }: Props) => {
  const { activeStep, stepCount, nextStep, previousStep } = useStepper();

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
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      {activeStep > 0 && <Button title="Previous" onPress={onPrevious} />}
      <Text>
        {activeStep + 1} / {stepCount}
      </Text>
      {activeStep < stepCount - 1 && <Button title="Next" onPress={onNext} />}
      {activeStep === stepCount - 1 && <Button title="Save" onPress={onSave} />}
    </View>
  );
};
