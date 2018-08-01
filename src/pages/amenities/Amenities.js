import React from 'react';
import './Amenities.css';
import deck_life from '../../resources/images/0622181427-EFFECTS.png';
import keurig from '../../resources/images/Keurig.webp';
import hair_dryer from '../../resources/images/hair_dryer.jpg';
import first_aid_kit from '../../resources/images/first_aid_kit.jpg';
import fire_extinguisher from '../../resources/images/fire_extinguisher.jpg';

const Amenities = () => {
  return (
    <div className="Amenities">
      <img className="Amenities-img" alt="Amenities-img" src={deck_life} />
      <h2 align='center'>
        Amenities ... features that provide comfort, convenience, or pleasure!
      </h2>
      <p>
        Sounds Groovy OBX seeks to provide many amenities!  You are on vacation!  Comfort and convenience is what we seek for visitors to Sounds Groovy OBX.  The following are a few of the amenities you may find during your visit.
      </p>

      <div className="grid-container">

        <div className="grid-item">
          <img className="Amenity-img" alt="Amenity-img" src={keurig} />
          <p>
            Pod coffee maker
          </p>
        </div>

        <div className="grid-item">
          <img className="Amenity-img" alt="Amenity-img" src={hair_dryer} />
          <p>
            Hair Dryer
          </p>
        </div>

        <div className="grid-item">
          <img className="Amenity-img" alt="Amenity-img" src={first_aid_kit} />
          <p>
            First Aid Kit
          </p>
        </div>

        <div className="grid-item">
          <img className="Amenity-img" alt="Amenity-img" src={fire_extinguisher} />
          <p>Fire Extinguishers</p>
        </div>

        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
      </div>

    </div>
  );
};

export default Amenities;