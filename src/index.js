import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import Home from './Pages/Home'
import Login from './Pages/Login'
import reducers from './reducers';

const store = createStore(reducers);

const routes = (
    <Provider store={store}>
    <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
  </Provider>
)

ReactDOM.render( routes, document.getElementById('root') );