import { combineReducers } from "redux";
import { reducer1 } from "./reducer1";
import { reducer2 } from "./reducer2";
import { reducer3 } from "./reducer3";
import { reducer4 } from "./reducer4";
export default combineReducers({
  reducers1: reducer1,
  reducers2: reducer2,
  reducers3: reducer3,
  reducers4: reducer4,
  // boards: combineReducers({
  //     cards: cardsReducer,
  // })
});
