import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
