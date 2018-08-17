import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

function Amenity(props) {
  return (
    <div className="grid-item">
      <img alt="Amenity-img" src={props.item_img}/>
      <p>{props.item_descr}</p>
    </div>
  );
}

Amenity.propTypes = {
  item_descr: PropTypes.string.isRequired,
  item_img: PropTypes.string.isRequired
};

export default Amenity;