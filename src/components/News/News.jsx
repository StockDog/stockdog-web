import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './News.css';

class News extends Component {
  generateHeadlines = () => {
    const headlineObjs = this.props.headlines;
    const headlines = [];

    // Don't do anything if there are no headlines
    if (!headlineObjs) {
      return;
    }

    headlineObjs.forEach((headline) => {
      headlines.push(
        <h2 onClick={() => this.props.history.push(headline.link)}>{headline.title}</h2>,
      );
    });

    return headlines;
  };

  render() {
    return (
      <div className="News">
        <h1>Today&#39;s Headlines</h1>
        {this.generateHeadlines()}
      </div>
    );
  }
}
News.propTypes = {
  history: PropTypes.object.isRequired,
  headlines: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default withRouter(News);
