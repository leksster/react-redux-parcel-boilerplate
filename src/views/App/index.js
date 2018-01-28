import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Stubs from 'views/Stubs';
import LoginComponent from 'views/Login';
import Home from 'views/Home';

const App = (props) => {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginComponent} />
        <Route path="/stubs" component={Stubs} />
      </Switch>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default App;
