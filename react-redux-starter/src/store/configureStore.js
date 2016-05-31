import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

/**
 * The setup for the one true store
 * @param  {object} initialState The initial state of the application
 * @return {object} The store representing the initial state
 */
const configureStore = (initialState) => createStore(
  rootReducer,
  initialState,
  applyMiddleware(reduxImmutableStateInvariant())
);

export default configureStore;
