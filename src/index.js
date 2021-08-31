import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store/store";
import DarkModeProvider from "./components/darkmode-context/darkmode-content";
ReactDOM.render(
  <Provider store={store}>
    <DarkModeProvider>
      <Router>
        <App />
      </Router>
    </DarkModeProvider>
  </Provider>,
  document.getElementById("root")
);
