import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => (
  <div className="Button">
    <button type="button" style={{ width: props.width }}>
      {props.text}
    </button>
  </div>
);

Button.propTypes = {
  width: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
