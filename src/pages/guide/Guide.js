import React from 'react';
import './Guide.css';
import sunset from '../../resources/images/0628182027b.png';
import RecommendationCard from '../../components/recommendation-card/RecommendationCard';

const Guide = () => {
  return (
    <div>
      <div className="Guide">
        <img className="Guide-img" alt="Guide-img" src={sunset} />
        <h2 align="center">
          Our Favorite Places in the Outer Banks!
        </h2>
      </div>
      <RecommendationCard />
    </div>
  );
};

export default Guide;