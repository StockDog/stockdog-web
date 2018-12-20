import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { authenticated } from '../../utils/utils';

const UnauthenticatedRoute = ({ component: Component, appProps: P, ...rest }) => {
  const cookies = P.cookies;

  let isAuthenticated = false;
  if (cookies) {
    isAuthenticated = authenticated(cookies.get('userId'), cookies.get('token'));
  }

  return (
    <Route
      {...rest}
      render={props => (isAuthenticated ? (
        <Redirect to={{ pathname: '/portfolio', state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      ))
      }
    />
  );
};

export default withCookies(UnauthenticatedRoute);
