import React, { createContext, useState } from 'react';
import { AddPostStep } from './type';

export type AddPostContextType = {
  step: AddPostStep;
  totalStep: number;
  stepIndex: number;
  nextStep: () => void;
  previousStep: () => void;
  savePost: () => void;
};

export const AddPostContext = createContext<AddPostContextType>({
  step: AddPostStep.CATEGORY,
  totalStep: 0,
  stepIndex: 0,
  nextStep: () => {},
  previousStep: () => {},
  savePost: () => {},
});

export default function AddPostProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const steps: AddPostStep[] = [
    AddPostStep.CATEGORY,
    AddPostStep.INFO,
    AddPostStep.OPTIONALINFO,
    AddPostStep.LABEL,
    AddPostStep.SHAREOPTIONS,
    AddPostStep.RESUME,
  ];

  const [step, setStep] = useState(steps[0]);

  const totalStep = steps.length;
  const getStep = (index: number) => steps[index];
  const getIndex = (value: AddPostStep) => steps.indexOf(value);
  const stepIndex = getIndex(step);

  const nextStep = () => {
    if (stepIndex === totalStep - 1) {
      return;
    }
    setStep(getStep(stepIndex + 1));
  };

  const previousStep = () => {
    if (stepIndex === 0) {
      return;
    }
    setStep(getStep(stepIndex - 1));
  };

  const savePost = () => {
    console.log('SAVE POST');
  };

  const contexValue: AddPostContextType = {
    step,
    totalStep,
    stepIndex,
    nextStep,
    previousStep,
    savePost,
  };

  return (
    <AddPostContext.Provider value={contexValue}>
      {children}
    </AddPostContext.Provider>
  );
}
