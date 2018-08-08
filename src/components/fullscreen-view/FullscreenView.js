import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FullscreenView.css';

const propTypes = {
  topText: PropTypes.string,
  bigText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
  imageUrl: PropTypes.string,
};

const defaultProps = {
  topText: 'We sailed away - on a winter\'s day',
  bigText: 'The Meadowlark and the chimcheree',
  buttonText: 'Learn More',
  buttonUrl: '/aboutus',
  imageUrl: 'https://i.imgur.com/u8XpMN9.jpg',
};

const FullscreenView = ({ 
  topText, 
  bigText, 
  buttonText, 
  buttonUrl, 
  imageUrl 
}) => {
  return (
    <div className="fullscreen-view standard" >
      <div className="sidebar">
        <div className="action-container">
          <p>{topText}</p>
          <h1>{bigText}</h1>
          <button>
            <Link to={buttonUrl}>{buttonText}</Link>
          </button>
        </div>
      </div>
      <div className="image-container" style={{
        backgroundImage: `url(${imageUrl})`,
      }}></div>
    </div>
  );
};

FullscreenView.propTypes = propTypes;
FullscreenView.defaultProps = defaultProps;

export default FullscreenView;