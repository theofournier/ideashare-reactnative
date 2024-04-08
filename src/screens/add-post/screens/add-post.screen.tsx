import React from 'react';
import { Stepper } from '../stepper';
import {
  CategoryContent,
  InfoContent,
  LabelContent,
  OptionalInfoContent,
  ResumeContent,
  ShareOptionsContent,
} from '../contents';
import { AddPostProvider } from '../context';
import { StepData, AddPostStep } from '../types';

export const AddPostScreen = () => {
  const steps: StepData[] = [
    {
      step: AddPostStep.CATEGORY,
      content: <CategoryContent />,
    },
    {
      step: AddPostStep.INFO,
      content: <InfoContent />,
    },
    {
      step: AddPostStep.OPTIONALINFO,
      content: <OptionalInfoContent />,
    },
    {
      step: AddPostStep.LABEL,
      content: <LabelContent />,
    },
    {
      step: AddPostStep.SHAREOPTIONS,
      content: <ShareOptionsContent />,
    },
    {
      step: AddPostStep.RESUME,
      content: <ResumeContent />,
    },
  ];

  return (
    <AddPostProvider>
      <Stepper steps={steps} />
    </AddPostProvider>
  );
};
