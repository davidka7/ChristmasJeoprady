import { combineReducers } from "redux";
import { reducer1 } from "./reducer1";
import { reducer2 } from "./reducer2";
import { reducer3 } from "./reducer3";
import { reducer4 } from "./reducer4";
import { r1 } from "./r1";
import { r2 } from "./r2";
import { r3 } from "./r3";
import { r4 } from "./r4";
import { c1 } from "./c1";
export default combineReducers({
  reducers1: reducer1,
  reducers2: reducer2,
  reducers3: reducer3,
  reducers4: reducer4,
  animal1: r1,
  animal2: r2,
  animal3: r3,
  animal4: r4,
  checker: c1,
  // boards: combineReducers({
  //     cards: cardsReducer,
  // })
});
