import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import clock from './clock';

export default combineReducers({
  clock,
  form: formReducer
});
