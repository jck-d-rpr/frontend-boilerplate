import { createStore, applyMiddleware } from 'redux';
import IndexReducer from './IndexReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

/**
 * The setup for the one true store
 * @param  {object} initialState The initial state of the application
 * @return {object} The store representing the initial state
 */
const configureStore = (initialState) => createStore(
  IndexReducer,
  initialState,
  applyMiddleware(reduxImmutableStateInvariant())
);

export default configureStore;
