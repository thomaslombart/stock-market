import React from 'react';
import App from './App';
import Detail from './Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/:stock" component={Detail} />
            </div>
        </Router>
    </Provider>
);

export default Root;