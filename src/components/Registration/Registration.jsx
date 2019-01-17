import React, { Component } from 'react';
import './Registration.css';

// TODO: Create constants for all strings for eventual NLS

export class RegisterForm extends Component {
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
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  };

  isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/;
    return passwordRegex.test(password);
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
    } else {
      this.setState({ registerError: true });
    }
  };

  isValidRegistration = () => {
    const {
      firstName, lastName, email, password,
    } = this.state;
    return (
      firstName && lastName && this.isValidEmail(email) && this.contextisValidPassword(password)
    );
  };

  render() {
    const {
      firstName, lastName, email, password, registerError,
    } = this.state;
    return (
      <form className="register-form">
        <h1 className="company-name">StockDog</h1>
        {registerError && <div className="form-error">Please fill inputs with valid values...</div>}
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
    );
  }
}

const withRegisterPage = WrappedComponent => props => (
  <div className="register-page">
    <WrappedComponent {...props} />
  </div>
);

export default withRegisterPage(RegisterForm);
