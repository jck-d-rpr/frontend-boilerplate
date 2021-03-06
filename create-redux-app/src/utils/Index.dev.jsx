import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import DevTools from './ReduxDevtools';
import Routes from '../Routes';
import configureStore from '../store/configureStore';
// Directly importing the minified bootstrap css to avoid all the painful
// steps it will take otherwise to get it to work.
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// we can pass in a state here to (useful if we get state from server, indexDB, filesystem, etc)
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Routes />
      { !window.devToolsExtension ? <DevTools /> : null }
    </div>
  </Provider>,
  document.getElementById('root')
);
