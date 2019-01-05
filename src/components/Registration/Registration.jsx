import React, {Component} from "react";
import "./Registration.css";

// TODO: Create constants for all strings for eventual NLS

export class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      registerError: false
    };
  }

  isValidRegistration() {
    // TODO: Implement Real Form Validation
    const {firstName, lastName, email, password} = this.state;
    return firstName && lastName && email && password;
  }

  handleInputChange = e => {
    const {name, value} = e.target;
    this.setState(() => {
      return {[name]: value};
    });
  };

  handleRegisterClick = () => {
    // TODO: Implement backend registration interaction
    if (this.isValidRegistration()) {
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        registerError: false
      });
    } else {
      this.setState({registerError: true});
    }
  };

  render() {
    const {firstName, lastName, email, password, registerError} = this.state;
    return (
      <form className="register-form">
        <h1 className="company-name">StockDog</h1>
        {registerError && (
          <div className="form-error">
            Please fix errors before continuing...
          </div>
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
    );
  }
}

const withRegisterPage = WrappedComponent => props => {
  return (
    <div className="register-page">
      <WrappedComponent {...props} />
    </div>
  );
};

export default withRegisterPage(RegisterForm);
