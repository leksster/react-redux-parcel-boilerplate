import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { login } from 'state/concepts/session/actions';

const LoginComponent = ({ logged, onLogin }) => (
  <div>
    <button onClick={onLogin} className="main-button main-button--blue main-button--lg mb-40">Log In</button>
    {logged}
  </div>
);

LoginComponent.propTypes = {
  logged: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  logged: state.sessionState.logged,
});

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
