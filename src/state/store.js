import axios from 'axios';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createLogicMiddleware } from 'redux-logic';
import operations from './concepts/rootOperation';
import * as reducers from './concepts';

const operationDependencies = {
  httpClient: axios,
};

const history = createHistory();

const routerMiddleware = createRouterMiddleware(history);
const logicMiddleware = createLogicMiddleware(operations, operationDependencies);

const middleware = applyMiddleware(
  logicMiddleware,
  routerMiddleware,
);

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer,
});

/* eslint no-underscore-dangle: "off" */
const enhancer = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default function configureStore() {
  const store = createStore(rootReducer, enhancer);
  return store;
}
