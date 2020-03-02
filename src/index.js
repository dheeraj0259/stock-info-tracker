import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import App from "./App";
import "./index.scss";
import Login from "./pages/Login";
import Notfound from "./components/notfound";
import Navbar from "./components/Navbar";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
const baseUrl = "stock-info-tracker";
sagaMiddleware.run(rootSaga);

const routes = (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={`/${baseUrl}`} component={App} />
          <Route path={`/${baseUrl}/signin`} component={Login} />
          <Route path={`/${baseUrl}/signup`} component={Login} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById("root"));
