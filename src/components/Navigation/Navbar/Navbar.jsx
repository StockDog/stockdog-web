import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import JoinCreateLeague from '../JoinCreateLeague/JoinCreateLeague';
import './Navbar.css';

import { Award, User } from 'react-feather';

const primaryColor = '#3ee7ad';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownActive: false,
    };
  }

  generateDropdownLinks = () => {
    const linkHtmls = [];
    const links = this.props.links;

    links.forEach((link) => {
      linkHtmls.push(<p key={link.title} onClick={() => this.props.history.push(link.location)}>{link.title}</p>);
    });

    return linkHtmls;
  };

  toggleDropdown = () => {
    this.setState(prevState => ({ dropdownActive: !prevState.dropdownActive }));
  };

  goToProfile = () => {
    this.props.history.push('/profile');
  };

  render() {
    return (
      <div className="Navbar">
        <JoinCreateLeague />
        <div className="navbar-portfolio-dropdown">
          <div className="navbar-portfolio-dropdown-btn" onClick={this.toggleDropdown}>
            <span>{this.props.currentPortfolioName}</span>
          </div>
          {this.state.dropdownActive ? (
            <div className="navbar-portfolio-dropdown-content">{this.generateDropdownLinks()}</div>
          ) : null}
        </div>
        <div className="navbar-sidebar-points">
          <div className="navbar-sidebar-points-circle">
            <Award color={primaryColor} size={18} />
          </div>
          <p>29321</p>
        </div>
        <div className="navbar-sidebar-profile" onClick={this.goToProfile}>
          <User color={primaryColor} size={21} />
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
