import React from 'react';
import {
    BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from "history";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store/index';
import LoginComponent from './LoginComponent';
import MainContainer from './containers/MainContainer';

const hist = createBrowserHistory();
const AppRoot = () => (
    <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
            <Router history={hist}>
                <Switch>
                    <Route exact path="/login" component={LoginComponent} />
                    <Route path="/" component={MainContainer} />
                </Switch>
            </Router>
        </Provider>
    </PersistGate>
);

export default AppRoot;