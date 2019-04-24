import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authenticated } from '../../utils/utils';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UnauthenticatedRoute extends Component {
  constructor(props) {
    super(props);

    this.isAuthenticated = authenticated(props.userId, props.token);
    console.log(this.isAuthenticated);
  }
  render() {
    const Component = this.props.component;

    return (
      <Route
        render={() => this.isAuthenticated ? 
          <Redirect to={{pathname: "/portfolio", state: { from: this.props.location }}} /> 
          : <Component {...this.props.appProps}/>}
      />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    userId: global.userId,
    token: global.token
  };
}

export default withRouter(connect(mapStateToProps, null)(UnauthenticatedRoute));
