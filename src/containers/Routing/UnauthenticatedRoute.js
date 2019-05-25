import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authenticated } from '../../utils/utils';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UnauthenticatedRoute extends Component {
  constructor(props) {
    super(props);

    this.isAuthenticated = authenticated(props.userId, props.token);
  }
  render() {
    const RenderingComponent = this.props.component;

    if (this.isAuthenticated) {
      return <Redirect to={{pathname: "/portfolio", state: { from: this.props.location }}} />
    }

    return (<div>
      {RenderingComponent({...this.props.appProps})}
    </div>);
  }
};

const mapStateToProps = (state) => {
  return {
    userId: state.global.userId,
    token: state.global.token
  };
}

export default withRouter(connect(mapStateToProps, null)(UnauthenticatedRoute));
