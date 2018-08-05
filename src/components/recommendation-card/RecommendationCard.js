// https://lh3.googleusercontent.com/p/AF1QipNTRE5Th1uYk8rkbnydUt3x8HJO8LtNr7AqpbeX=w748-h561-p
import React from 'react';
import PropTypes from 'prop-types';
import './RecommendationCard.css';

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  linkTo: PropTypes.string,
};

const defaultProps = {
  title: 'Sam & Omie\'s',
  description: 'The Meadowlark and the chimcheree',
  imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNTRE5Th1uYk8rkbnydUt3x8HJO8LtNr7AqpbeX=w748-h561-p',
  linkTo: 'http://google.com',
};

const RecommendationCard = ({
  title,
  description,
  imageUrl,
  linkTo
}) => {
  return (
    <div className="grid-item">
      <div className="recommendation-card">
        <a href={linkTo} className="image-container" style={{
          backgroundImage: `url(${imageUrl})`
        }}>
          <h1>{title}</h1>
        </a>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

RecommendationCard.propTypes = propTypes;
RecommendationCard.defaultProps = defaultProps;

export default RecommendationCard;