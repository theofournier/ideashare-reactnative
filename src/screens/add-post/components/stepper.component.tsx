import React from 'react';
import { StepperProvider, useStepper } from '../context';
import { StepData } from '../types';

type Props = {
  steps: StepData[];
};

const StepperContent = ({ steps }: Props) => {
  const { activeStep } = useStepper();

  return steps[activeStep].content;
};

export default function Stepper({ steps }: Props) {
  return (
    <StepperProvider steps={steps}>
      <StepperContent steps={steps} />
    </StepperProvider>
  );
}
