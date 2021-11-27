import { ReactElement } from 'react';

export enum AddPostStep {
  CATEGORY,
  INFO,
  OPTIONALINFO,
  LABEL,
  SHAREOPTIONS,
  RESUME,
}

export type StepData = {
  step: AddPostStep;
  content: ReactElement;
};
