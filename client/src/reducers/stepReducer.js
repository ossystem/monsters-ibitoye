import { SET_STEP } from "../actions/types";
import { STEPS } from "../helpers/constants";

const ifAuthenticated = () => {
  const accessToken = localStorage.getItem('access_token');
  let authenticated = false;

  if (accessToken) {
    const expiresIn = localStorage.getItem('expires_in');
    const timeNowMs = new Date().getTime();

    if (timeNowMs < expiresIn) {
      authenticated = true;
    }
  }

  return authenticated;
};
const initialState = ifAuthenticated() === true ? STEPS.QUESTIONS : STEPS.HOME;

export default function (state = initialState, action) {
  switch(action.type) {
    case SET_STEP:
      return action.payload;
    default:
      return state;
  }
}
