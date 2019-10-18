import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./Redux/store";

import firebase from "./firebase";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";

const rrfConfig = {
  userProfile: "users"
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
