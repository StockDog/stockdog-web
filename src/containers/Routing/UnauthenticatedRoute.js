import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authenticated } from '../../utils/utils';
import { connect } from 'react-redux';

const UnauthenticatedRoute = ({ component: Component, userId, token, ...rest }) => {
  const isAuthenticated = authenticated(userId, token);
  return (
    <Route {...rest} render={(props) => (
      !isAuthenticated
        ? <Component {...props} />
        : <Redirect to='/portfolio' />
    )} />
  )
};

const mapStateToProps = (state) => {
  return {
    userId: state.global.userId,
    token: state.global.token
  };
}

export default connect(mapStateToProps)(UnauthenticatedRoute);