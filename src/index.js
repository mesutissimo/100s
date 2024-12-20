import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./firebase/firebaseApp";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./redux/reducers";
import sagas from "./redux/sagas";
import reduxSaga from "redux-saga";

const sagaMiddleWare = reduxSaga();

const store = configureStore({
  reducer: reducers(),
  middleware: () => [sagaMiddleWare],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleWare.run(sagas);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { store };
