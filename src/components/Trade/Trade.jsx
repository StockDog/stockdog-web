import React from 'react';
import PropTypes from 'prop-types';
import './Trade.css';
import Button from '../Button/Button';

const Trade = props => (
  <div className="Trade">
    <div className="trade-elements">
      <div className="trade-element">
        <h1>{props.quantity}</h1>
        <h2>Owned</h2>
      </div>
      <div className="trade-element">
        <h1>{`$${props.price}`}</h1>
        <h2>Price</h2>
      </div>
      <div className="trade-element">
        <h1>{props.volume}</h1>
        <h2>Volume</h2>
      </div>
    </div>
    <div className="trade-button">
      <Button text="Trade" width={260} />
    </div>
  </div>
);

Trade.propTypes = {
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
};

export default Trade;
