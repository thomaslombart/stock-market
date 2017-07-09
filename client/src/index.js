import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App';
import Detail from './components/Detail';
import store from './store';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/:stock" component={Detail}/>
    </div>
  </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
