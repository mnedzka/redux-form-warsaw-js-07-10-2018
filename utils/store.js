import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import asyncMiddleware from "../middlewares/async/async";
import { pushAutoRemoveNotifications } from "actions/notifications";

import rootReducer from '../reducers';

const enhancers = compose(
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension && window.devToolsExtension()
    : f => f
);

const createStoreWithMiddleware = applyMiddleware(asyncMiddleware.withOptions({
  actions: {
    pushAutoRemoveNotifications,
  },
  extraArguments: {
    test: "thisIsExtraArgument"
  }
}))(createStore);

export default initialState =>
  createStoreWithMiddleware(rootReducer, initialState, enhancers);
