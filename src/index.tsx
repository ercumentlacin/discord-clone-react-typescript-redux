import { Fragment } from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import store from "./app/store";

import GlobalStyle from "./theme/globalStyles";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  rootElement
);
