import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Listing.css';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.generateListings();
  }

  generateListings = () => {
    const { listings } = this.props;
    if (!listings) {
      return null;
    }

    const listingElements = listings.map((listing) => {
      // Need to do the priceChange element seperately because
      // it changes depending on if its negative or positive
      const prefixSymbol = listing.priceChange >= 0 ? '+' : '',
        colorClass = listing.priceChange >= 0 ? 'listing-up-color' : 'listing-down-color',
        priceChangeElement = (
          <div className={`listing-item-price-change ${colorClass}`}>
            {`${prefixSymbol}\n${listing.priceChange}`}
          </div>
        );
      // Need to do amount separately since 0 shows nothing
      let amountElement = null;
      if (listing.amount !== 0) {
        amountElement = <div className="listing-item-amount">{`${listing.amount} shares`}</div>;
      }
      const listingElement = (
        <div className="listing-item">
          <div className="listing-item-title">{listing.title}</div>
          <div className="listing-item-desc">{listing.desc}</div>
          <div className="listing-item-price-info">
            <div className="listing-item-price">{listing.price}</div>
            {priceChangeElement}
          </div>
          {amountElement}
        </div>
      );
      return listingElement;
    });
    this.setState({ listingElements });
  };

  render() {
    return (
      <div className="Listing">
        <div className="listing-title">{this.props.title}</div>
        <div className="listing-items">{this.state.listingElements}</div>
      </div>
    );
  }
}

Listing.propTypes = {
  title: PropTypes.string.isRequired,
  listings: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceChange: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Listing;
