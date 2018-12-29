import { GreetingState } from './reducers/index';
import greetingReducer from './reducers/index';
import { combineReducers } from 'redux';

export interface RootState {
  greeting: GreetingState;
}

export const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export default rootReducer;
