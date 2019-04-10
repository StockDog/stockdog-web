import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthenticatedRoute from 'components/Routing/AuthenticatedRoute';
import UnauthenticatedRoute from 'components/Routing/UnauthenticatedRoute';
import { withCookies } from 'react-cookie';
import { Provider } from 'react-redux';
import store from './store/store';

// Containers
import { Login } from './containers/Registration/Login'
import Registration from './containers/Registration/Registration';
import Stock from './containers/Stock/Stock';
import Portfolio from './containers/Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <UnauthenticatedRoute path="/stock/:ticker" component={Stock} appProps={this.props} />
            <UnauthenticatedRoute exact path="/" component={Portfolio} appProps={this.props} />
            <UnauthenticatedRoute exact path="/login" component={Login} appProps={this.props}/>
            <UnauthenticatedRoute exact path="/registration" component={Registration} appProps={this.props}/>

            {/* <UnauthenticatedRoute exact path="/" component={Login}
                    appProps={this.props}/>
                 <AuthenticatedRoute exact path="/portfolio" component={Portfolio}
                    appProps={this.props}/> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default withCookies(App);
