import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import baseReducer from './Base/Reducers/baseReducer';

const IndexReducer = combineReducers({
  baseReducer,
  form: formReducer
});

export default IndexReducer;
