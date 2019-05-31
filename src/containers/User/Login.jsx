import React, { Component } from 'react';
import './Registration.css';
import './Login.css';
import { withRouter, Link } from 'react-router-dom';
import { loginUser } from '../../api/api';
import { setUserInfo } from '../../global/state/globalActions';
import { connect } from 'react-redux';

class Login extends Component {
   constructor(props) {
      super(props);

      this.state = {
         email: '',
         password: ''
      };
   }

   handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState(() => ({ [name]: value }));
   };

   handleLoginClick = async () => {
      try {
         const { email, password } = this.state;
         const res = await loginUser({ email, password });

         this.props.setUserInfo(res.data.userId, res.data.token);
         this.props.history.push('/portfolio');
      } catch (error) {
         alert('Failed to login. Please check username and password.' + error);
      }
   };

   render() {
      const { email, password } = this.state;
      return (
         <div className="Registration">
            <form className="register-form">
               <Link to='/'><div className="company-logo" /></Link>
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
               </div>
               <div className="register-btn" onClick={this.handleLoginClick}>
                  login
               </div>
               <div className='login-registration-link'>
                  <Link to='/registration'>Don't have an account?</Link>
               </div>
            </form>
         </div>
      );
   }
}

export default withRouter(connect(null, {
   setUserInfo
})(Login));