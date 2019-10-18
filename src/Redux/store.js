import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import { firebaseReducer, getFirebase } from "react-redux-firebase";

import { reducer } from "./reducer";

let composeEnhancer = compose;
const middlewares = [reduxThunk.withExtraArgument(getFirebase)];
const enhancers = [applyMiddleware(...middlewares)];

const rootReducer = combineReducers({ firebaseReducer, reducer });

export const store = createStore(
  rootReducer,
  {},
  composeEnhancer(...enhancers)
);
