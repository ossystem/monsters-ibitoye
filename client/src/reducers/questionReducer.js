import { GET_QUESTION, RESET_QUESTION } from '../actions/types';

const initialState = {
  id: 0,
  question: "",
  optionType: "",
  options: [
    {
      "id": 9,
      "questionId": 3,
      "chosenBy": null,
      "option": ""
    },
    {
      "id": 10,
      "questionId": 3,
      "chosenBy": null,
      "option": "",
    },
  ],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_QUESTION:
      return  action.payload;
    case RESET_QUESTION:
      return initialState;
    default:
      return state;
  }
}
