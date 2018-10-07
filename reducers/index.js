import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import clock from './clock';
import pending from "./pending";
import notifications from "./notifications";

export default combineReducers({
  clock,
  pending,
  notifications,
  form: formReducer
});
