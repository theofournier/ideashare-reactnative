import React, { createContext, ReactElement, useEffect, useState } from 'react';
import { AddPostStep, StepData } from '../types';

export type StepperContextType = {
  activeStep: number;
  activeStepType: AddPostStep;
  stepCount: number;
  nextStep: () => void;
  previousStep: () => void;
  toStep: (step: number) => void;
};

export const StepperContext = createContext<StepperContextType>({
  activeStep: 0,
  activeStepType: AddPostStep.CATEGORY,
  stepCount: 0,
  nextStep: () => {},
  previousStep: () => {},
  toStep: () => {},
});

type Props = {
  children: ReactElement;
  steps: StepData[];
};

export default function StepperProvider({ children, steps }: Props) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [stepCount, setStepCount] = useState<number>(0);

  const activeStepType = steps[activeStep].step;

  useEffect(() => {
    setStepCount(steps.length);
  }, [steps]);

  const nextStep = () => {
    if (activeStep === stepCount - 1) {
      return;
    }
    setActiveStep(activeStep + 1);
  };

  const previousStep = () => {
    if (activeStep === 0) {
      return;
    }
    setActiveStep(activeStep - 1);
  };

  const toStep = (stepType: AddPostStep) => {
    const step = steps.findIndex(value => value.step === stepType);
    if (step >= 0) {
      setActiveStep(step);
    }
  };

  const contexValue: StepperContextType = {
    activeStep,
    activeStepType,
    stepCount,
    nextStep,
    previousStep,
    toStep,
  };

  return (
    <StepperContext.Provider value={contexValue}>
      {children}
    </StepperContext.Provider>
  );
}
