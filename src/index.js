import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configStore from "./redux/reducers/configStore";
import { Provider } from "react-redux";

const store = configStore();

//Provider distributes our all state to another compononents
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
