import React, { Component } from 'react';
import './Registration.css';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// TODO: Create constants for all strings for eventual NLS

export class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      registerError: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      doesEmailRegexMatchEmail = emailRegex.test(email);
    return doesEmailRegexMatchEmail;
  };

  isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/,
      doesPasswordRegexMatchPassword = passwordRegex.test(password);
    return doesPasswordRegexMatchPassword;
  };

  handleRegisterClick = () => {
    if (this.isValidRegistration()) {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        registerError: false,
      });
      // TODO: make POST request to backend
      this.props.history.push('/login');
    } else {
      this.setState({ registerError: true });
    }
  };

  isValidRegistration = () => {
    const {
      firstName, lastName, email, password,
    } = this.state;
    return firstName && lastName && this.isValidEmail(email) && this.isValidPassword(password);
  };

  render() {
    const {
      firstName, lastName, email, password, registerError,
    } = this.state;
    return (
      <div className="register-page">
        <form className="register-form">
          <h1 className="company-name">StockDog</h1>
          {registerError && (
            <div className="form-error">Please fill inputs with valid values...</div>
          )}
          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              type="text"
              name="firstName"
              className="first-name"
              value={firstName}
              placeholder="first name"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              type="text"
              name="lastName"
              className="last-name"
              value={lastName}
              placeholder="last name"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              type="email"
              name="email"
              className="email"
              value={email}
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              type="password"
              name="password"
              className="password"
              value={password}
              placeholder="password"
            />
            <div className="info-icon" />
          </div>
          <div className="register-btn" onClick={this.handleRegisterClick}>
            register
          </div>
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Registration);
