import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./reducers/redux";
import "./styles/global.scss";
import Routes from "./routes";
// import * as serviceWorker from "./serviceWorker";

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
// serviceWorker.unregister();
