import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ data }) => {
  return (
    <div className="article">
        {data.image && <img src={data.image} alt={data.title} />}
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <p>Written by: {data.author}</p>
      <hr />
    </div>
  );
}

Article.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired
};

export default Article;

