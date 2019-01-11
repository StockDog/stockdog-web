import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { authenticated } from '../../utils/utils';

const AuthenticatedRoute = ({ component: Component, appProps: P, ...rest }) => {
  const cookies = P.cookies;

  let isAuthenticated = false;
  if (cookies) {
    isAuthenticated = authenticated(cookies.get('userId'), cookies.get('token'));
  }

  return (
    <Route
      {...rest}
      render={props => (isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      ))
      }
    />
  );
};

export default withCookies(AuthenticatedRoute);
