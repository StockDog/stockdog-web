import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authenticated } from '../../utils/utils';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const UnauthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

export default UnauthenticatedRoute;

// class UnauthenticatedRoute extends Component {
//   constructor(props) {
//     super(props);

//     this.isAuthenticated = authenticated(props.userId, props.token);
//   }
//   render() {
//     const Component = this.props.component;
//     return (
//       <Route {...this.props} render={(props) => (
//         this.isAuthenticated === true
//           ? <Component {...props} />
//           : <Redirect to='/login' />
//       )} />
//     );
//   }
// };

// const mapStateToProps = (state) => {
//   return {
//     userId: state.global.userId,
//     token: state.global.token
//   };
// }

// export default withRouter(connect(mapStateToProps, null)(UnauthenticatedRoute));
