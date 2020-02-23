import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notfound from "./components/notfound";
import Navbar from "./components/Navbar";

const store = createStore(reducers);

const routes = (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById("root"));
