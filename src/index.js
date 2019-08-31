import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { messageReducer } from "./reducers/index";
import Main from "./components/Main";
import "./styles.css";

const store = createStore(messageReducer);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("main")
);
