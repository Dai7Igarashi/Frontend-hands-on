import { combineReducers } from "redux";

import helloReducer, { HelloState } from "./hello";
import goodbyReducer, { GoodByState } from "./goodby";

export interface GreetingState {
  hello: HelloState;
  goodby: GoodByState;
}

const reducer = combineReducers({
  hello: helloReducer,
  goodby: goodbyReducer,
});

export default reducer;
