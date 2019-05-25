import React, { Component } from 'react';
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
      // Need to do the gain element seperately because
      // it changes depending on if its negative or positive
      const prefixSymbol = listing.gain >= 0 ? '+' : '',
        colorClass = listing.gain >= 0 ? 'listing-up-color' : 'listing-down-color',
        priceChangeElement = (
          <div className={`listing-item-price-change ${colorClass}`}>
            {`${prefixSymbol}\n${listing.gain}`}
          </div>
        );
      // Need to do amount separately since 0 shows nothing
      let amountElement = null;
      if (listing.amount !== 0) {
        amountElement = <div className="listing-item-amount">{`${listing.shareCount} shares`}</div>;
      }
      const listingElement = (
        <div className="listing-item" key={listing.ticker}>
          <div className="listing-item-title">{listing.ticker}</div>
          <div className="listing-item-desc">{listing.companyName}</div>
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

export default Listing;
