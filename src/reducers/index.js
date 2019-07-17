import { combineReducers } from 'redux';
import QuizReducer from './quiz-reducer';

const reducers = {
  quizStore: QuizReducer,
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
