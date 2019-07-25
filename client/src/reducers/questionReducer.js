import { GET_QUESTION } from '../actions/types';
import { QUESTION_AUTH } from "../helpers/constants";

const initialState = QUESTION_AUTH;

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_QUESTION:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
