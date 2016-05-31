import React from 'react';
import ReactDOM from 'react-dom';

import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';

import Routes from './Components/Routes';

ReactDOM.render(
  <Router history={browserHistory} >
    { Routes }
  </Router>,
  document.getElementById('app')
);
