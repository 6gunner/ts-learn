// app主入口
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import AppRouter from './router'
import store from './store'
import * as serviceWorker from "./serviceWorker";

import "./index.css";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();