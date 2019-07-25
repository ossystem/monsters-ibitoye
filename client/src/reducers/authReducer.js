import { LOG_IN, LOG_OUT } from "../actions/types";

const initialState = {
  access_token: localStorage.getItem('access_token'),
  expires_in: localStorage.getItem('expires_in'),
  error: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOG_IN:
      return {
        ...state,
        access_token: action.payload.access_token,
        expires_in: action.payload.expires_in,
        error: action.payload.error,
      };
    case LOG_OUT:
      return {
        ...state,
        access_token: action.payload.access_token,
        expires_in: action.payload.expires_in,
      };
    default:
      return state;
  }
};
