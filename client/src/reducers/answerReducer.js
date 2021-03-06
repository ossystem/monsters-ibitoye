import { SUBMIT_ANSWERS, SUBMIT_ANSWER, RESET_ANSWERS } from "../actions/types";

const initialState = {
  answers: [],
  emailSent: false,
  submittedAll: false,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SUBMIT_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };
    case SUBMIT_ANSWERS:
        return {
          ...state,
          emailSent: true,
          submittedAll: true,
        };
    case RESET_ANSWERS:
        return initialState;
    default:
      return state;
  }
};
