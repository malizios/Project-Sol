import * as types from "../actions/action-types";
import Immutable from "immutable";
const initialState = Immutable.fromJS({count: 0});

const counter = (state = initialState, action = {}) => {
  switch (action.type) {
  case types.INCREMENT:
    return state.set("count", state.get("count") + 1);
  case types.DECREMENT:
    return state.set("count", state.get("count") - 1);
  default:
    return state;
  }
};

export default counter;
