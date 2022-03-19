import * as actionTypes from "../actions/actionTypes";

const INITIAL = 0;
// created a reducer func.
const counterReducer = (state = INITIAL, action) => {
  console.log("Geldi state", state);
  console.log("Geldi action", action);

  switch (action.type) {
    case actionTypes.COUNTER_INCREASE:
      return state + action.payload;
    case actionTypes.COUNTER_DECREASE:
      return state - action.payload;
    case actionTypes.COUNTER_RESET:
      return INITIAL + action.payload;
    default:
      return state;
  }
};

export default counterReducer;
