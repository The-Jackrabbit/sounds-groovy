import React from 'react';
import './Amenities.css';
import deck_life from '../../resources/images/0622181427-EFFECTS.png';
import keurig from '../../resources/images/Keurig.webp';
import hair_dryer from '../../resources/my-icons-collection/svg/002-dryer.svg';
import first_aid_kit from '../../resources/my-icons-collection/svg/003-medicine.svg';
import fire_extinguisher from '../../resources/my-icons-collection/svg/004-fire.svg';
import flashlight from '../../resources/my-icons-collection/svg/001-flashlight.svg';
import sheets from '../../resources/my-icons-collection/svg/005-towel.svg';
import washer from '../../resources/my-icons-collection/svg/006-household.svg';
import iron from '../../resources/my-icons-collection/svg/007-iron.svg';

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

      <div>
        <h2 align='left'>General Amenities</h2>
        <div className="grid-container">

          <div className="grid-item">
            <img className="Amenity-img" alt="Amenity-img" src={first_aid_kit} />
            <p>First Aid Kit</p>
          </div>

          <div className="grid-item">
            <img className="Amenity-img" alt="Amenity-img" src={fire_extinguisher} />
            <p>Fire Extinguishers on all levels</p>
          </div>

          <div class="grid-item">
            <img className="Amenity-img" alt="Amenity-img" src={flashlight} />
            <p>Flashlights in every bedroom</p>
          </div>


          <div class="grid-item">
            <img className="Amenity-img" alt="Amenity-img" src={sheets} />
            <p>Sheets, Bath Towels & Beach Towels</p>
          </div>

          <div class="grid-item">
            <img className="Amenity-img" alt="Amenity-img" src={washer} />
            <p>Washing Machine & Dryer </p>
          </div>

          <div class="grid-item">
            <img className="Amenity-img" alt="Amenity-img" src={iron} />
            <p>Iron & Ironing Board</p>
          </div>

        </div>

      </div>

      <div>
        <h2 align='left'>Kitchen Amenities</h2>
        <div className="grid-container">

          <div className="grid-item">
            <img className="Amenity-img" alt="Amenity-img" src={keurig} />
            <p>Pod coffee maker</p>
          </div>

          <div className="grid-item">
            <p>Toaster Oven</p>
          </div>

          <div className="grid-item">
            <p>Immersion Blender</p>
          </div>

          <div className="grid-item">
            <p>Variety of Spices & Condiments</p>
          </div>

          <div className="grid-item">
            <p>Crockpot</p>
          </div>

          <div className="grid-item">
            <p>Blender</p>
          </div>

          <div className="grid-item">
            <p>Wine Opener</p>
          </div>

        </div>

      </div>

      <div>
        <h2 align='left'>Recreational Amenities</h2>
        <div className="grid-container">


          <div class="grid-item">Beach Gear - Chairs, Umbrellas</div>
          <div class="grid-item">Fishing Rods</div>
          <div class="grid-item">Community Boat Ramp</div>
          <div class="grid-item">Trailer Parking</div>
          <div class="grid-item">Dock for Water Toys</div>
          <div class="grid-item">Fishing Dock</div>
          <div class="grid-item">Community Pool</div>

        </div>

      </div>

      <div>
        <h2 align='left'>Personal Care Amenities</h2>
        <div className="grid-container">

          <div className="grid-item">
            <img className="Amenity-img" alt="Amenity-img" src={hair_dryer} />
            <p>Hair Dryer</p>
          </div>

          <div class="grid-item">Dressing mirrors</div>
          <div class="grid-item">Lighted makeup mirrors </div>
          <div class="grid-item">Shampoo & Conditioner</div>
          <div class="grid-item">Body Wash</div>
        </div>

      </div>
    </div>
  );
};

export default Amenities;