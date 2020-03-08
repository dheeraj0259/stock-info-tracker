import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import App from "./App";
import "./index.scss";
import Login from "./pages/Login";
import Home from "./pages/Home";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const baseUrl = "stock-info-tracker";

const routes = (
  <Provider store={store}>
    <Router>
      <Route path={`/${baseUrl}`} component={App} />
      <Route path={`/${baseUrl}/signin`} component={Login} />
      <Route path={`/${baseUrl}/signup`} component={Login} />
      <Route path={`/${baseUrl}/dashboard`} component={Home} />
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById("root"));
