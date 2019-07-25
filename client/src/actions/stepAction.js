import { SET_STEP } from "../actions/types";

export const setStep = (step) => {
  console.log('new step', step)
  return {
    type: SET_STEP,
    payload: step,
  }
};
