import React from 'react';
import './Guide.css';
import '../../App.css';
import sunset from '../../resources/images/0628182027b.png';


const Guide = () => {
  // Luke for this one I want something like this ...
  // https://v2.hostfully.com/gsntfbq/recommendations/food
  // essentially a photo and a link and a recco blurb
  return (
    <div className="Guide">
      <img className="header-img" alt="Guide-img" src={sunset} />
      <h2 align="center">
        Our Favorite Places in the Outer Banks!
      </h2>

    </div>
  );
};

export default Guide;