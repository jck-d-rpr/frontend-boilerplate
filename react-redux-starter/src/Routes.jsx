/* eslint-disable no-console */
import Main from './Base/Main';
import { ROUTE_PATHS } from './constants';


// Error msg
const errorLoading = err => { console.error('Dynamic page loading failed', err); };

// The function that returns a function which calls the callback
const loadRoute = cb => module => cb(null, module.default);

// The routes such that they laxy load.
export default {
  component: Main,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('./Home/Dashboard').then(loadRoute(cb)).catch(errorLoading);
      }
    },
    {
      path: ROUTE_PATHS.ABOUT,
      getComponent(location, cb) {
        System.import('./About/AboutPage').then(loadRoute(cb)).catch(errorLoading);
      }
    }
  ]
};
