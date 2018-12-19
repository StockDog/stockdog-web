import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = props => (
  <div className="Article">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Article;
