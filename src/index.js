import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LoginComponent from './LoginComponent';
import HomeComponent from './HomeComponent';
import NotFoundComponent from './NotFoundComponent';
import { store } from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginComponent} />
        <Route path="/" component={HomeComponent} />
        <Route path="*" component={NotFoundComponent} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
