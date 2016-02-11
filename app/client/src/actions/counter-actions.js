import * as types from "./action-types";

export const increment = () => {
  return {
    type: types.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: types.DECREMENT
  };
};
