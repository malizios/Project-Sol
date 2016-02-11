import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import * as reducers from "../reducers";

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  logger,
  thunk
)(createStore);

const reducer = combineReducers(reducers);

const configureStore = function (initialState): Function {
  return createStoreWithMiddleware(reducer, initialState);
};

export default configureStore;
