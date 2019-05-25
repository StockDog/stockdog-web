import React, { Component } from 'react';
import './Registration.css';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { withAlert } from 'react-alert';
import { compose } from 'redux';
import { registerUser } from '../../api/api';
import { Info } from 'react-feather';

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
      try {
        const {
          firstName, lastName, email, password,
        } = this.state,
          userInfo = {
            firstName,
            lastName,
            email,
            password,
          };
        registerUser(userInfo);
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          registerError: false,
        });
        this.props.info.show('Registration successful.');
        this.props.history.push('/login');
      } catch (error) {
        this.props.alert.show(error);
      }
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
      <div className="Registration">
        <form className="register-form">
          <a href='/'><div className="company-logo" /></a>
          {registerError && <div className="form-error">Please check input.</div>}
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
            <div className="register-info-icon">
              <a data-tip data-for='password-info'>
                <Info color="#FFF" />
              </a>
              <ReactTooltip id='password-info' type='warning' effect='solid'>
                <span>Must be at least 8 characters (max. 32), and at least 1 uppercase letter, 1 lowercase letter, and 1 letter.<br /> No special characters are supported.</span>
              </ReactTooltip>
            </div>
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
  alert: PropTypes.object.isRequired,
};

// export default Registration;

export default compose(
  withAlert,
)(Registration);
