import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import App from 'views/App';
import configureStore from 'state/store';
import 'public/assets/stub.scss';

const history = createHistory();

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'),
);
