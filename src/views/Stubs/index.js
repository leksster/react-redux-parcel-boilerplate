import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import Login from 'views/Stubs/Login';

function Stubs({ match }) {
  return (
    <div>
      <h2>Stubs</h2>

      <ul>
        <li>
          <Link to={`${match.url}/login`}>Login</Link>
          <Route path={`${match.url}/login`} component={Login} />
        </li>
      </ul>

    </div>
  );
}

Stubs.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Stubs;
