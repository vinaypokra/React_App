import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
//import { StyleRoot } from "radium";
import reducers from "./component/Redux/reducers/";
import "./index.css";

/* ReactDom.render(
  <StyleRoot>
    <App />
  </StyleRoot>,

  document.getElementById("root")
); */
ReactDom.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
