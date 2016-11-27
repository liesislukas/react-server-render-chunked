import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
const App = require('./components/App');

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/About'),
      require('./routes/Contact'),
    ]
  }]
};

render(<Router history={browserHistory} routes={rootRoute}/>, document.getElementById('app'));