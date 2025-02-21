import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import App from "./App";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { accountReducer } from "./reducers/account";
import { bonusReducer } from "./reducers/bonus";

const store = createStore(
  combineReducers({ account: accountReducer, bonus: bonusReducer }),
  applyMiddleware(logger, thunk)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
