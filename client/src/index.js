import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { CookiesProvider } from "react-cookie";
import logger from "redux-logger";
import "antd/dist/antd.css";

import reducer from "./ducks";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducer, applyMiddleware(logger));

render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
