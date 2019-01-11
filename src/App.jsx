import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import AuthenticatedRoute from 'components/Routing/AuthenticatedRoute';
// import UnauthenticatedRoute from 'components/Routing/UnauthenticatedRoute';
import { withCookies } from 'react-cookie';
import { Provider } from 'react-redux';
import store from './store/store';

// Containers

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        {/* <UnauthenticatedRoute exact path="/" component={Login}
                  appProps={this.props}/>
               <AuthenticatedRoute exact path="/portfolio" component={Portfolio}
                  appProps={this.props}/> */}
      </div>
    </Router>
  </Provider>
);

export default withCookies(App);
