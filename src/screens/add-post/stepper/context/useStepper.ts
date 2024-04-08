import { useContext } from 'react';
import { StepperContext } from './stepper.context';

export default function useStepper() {
  return useContext(StepperContext);
}
