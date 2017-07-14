import React from 'react';
import PropTypes from 'prop-types';
import { App } from './'
import { Provider } from 'react-redux';

const Root = ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;