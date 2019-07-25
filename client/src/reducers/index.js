import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import answerReducer from './answerReducer';
import stepReducer from './stepReducer';
import authReducer from './authReducer';

export default combineReducers({
  question: questionReducer,
  answer: answerReducer,
  step: stepReducer,
  auth: authReducer,
});
