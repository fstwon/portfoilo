import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.component";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/Root.redux";
import { Provider } from "react-redux";
import "./reset.styles.scss";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = configureStore({
  reducer: rootReducer
});

root.render(
  <React.StrictMode >
    <BrowserRouter >
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);