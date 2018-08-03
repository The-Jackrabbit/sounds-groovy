import React from 'react';
import './Amenities.css';
import '../../App.css';
import deck_life from '../../resources/images/0622181427-EFFECTS.png';
// general
import first_aid_kit from '../../resources/my-icons-collection/svg/003-medicine.svg';
import fire_extinguisher from '../../resources/my-icons-collection/svg/004-fire.svg';
import flashlight from '../../resources/my-icons-collection/svg/001-flashlight.svg';
import sheets from '../../resources/my-icons-collection/svg/005-towel.svg';
import washer from '../../resources/my-icons-collection/svg/006-household.svg';
import iron from '../../resources/my-icons-collection/svg/008-iron-1.svg';
// kitchen
import keurig from '../../resources/my-icons-collection/svg/009-coffee-maker.svg';
import toaster from '../../resources/my-icons-collection/svg/010-microwave-oven.svg';
import iblender from '../../resources/my-icons-collection/svg/011-beater.svg';
import blender from '../../resources/my-icons-collection/svg/012-mixer.svg';
import crockpot from '../../resources/my-icons-collection/svg/013-cooking.svg';
import spices from '../../resources/my-icons-collection/svg/014-spices.svg';
import corkscrew from '../../resources/my-icons-collection/svg/015-bottle-opener.svg';
// recreational
import umbrella from '../../resources/my-icons-collection/svg/016-sunbed.svg';
import rods from '../../resources/my-icons-collection/svg/017-fishing-rod.svg';
import ramp from '../../resources/my-icons-collection/svg/018-boat-on-a-ramp.svg';
import jetski from '../../resources/my-icons-collection/svg/019-jet-ski.svg';
import boat from '../../resources/my-icons-collection/svg/020-speed-boat.svg';
import pool from '../../resources/my-icons-collection/svg/021-swimming-pool.svg';
import fishing from '../../resources/my-icons-collection/svg/023-fish-1.svg';
// personal care
import shampoo from '../../resources/my-icons-collection/svg/026-soap.svg';
import mirror from '../../resources/my-icons-collection/svg/024-furniture-and-household.svg';
import mmirror from '../../resources/my-icons-collection/svg/025-dresser.svg';
import soap from '../../resources/my-icons-collection/svg/027-shampoo.svg';
import hair_dryer from '../../resources/my-icons-collection/svg/002-dryer.svg';

var general_dict = {

  first_aid_kit:      'First Aid Kit',
  fire_extinguisher:  'Fire Extinguishers on all levels'
};

const Amenities = () => {
  return (
    <div className="Amenities">
      <img className="header-img" alt="Amenities" src={deck_life} />
      <h2 align='center'>
        Amenities ... features that provide comfort, convenience, or pleasure!
      </h2>
      <p>
        Sounds Groovy OBX seeks to provide many amenities!  Whether you are on vacation or visiting the Outer Banks for a family wedding, Sounds Groovy OBX has tried to think of your every need!  Comfort and convenience is what we want for our visitors to Sounds Groovy OBX.  The following are a few of the amenities you may find during your visit.
      </p>

      <div>
        <h2 align='left'>General</h2>
        <div className="grid-container">

          {/* Luke - key, value with loop */}

          <GridItem
            itemDescr='First Aid Kit'
            itemIcon={first_aid_kit}
          />

          <GridItem
            itemDescr='Fire Extinguishers on all levels'
            itemIcon={fire_extinguisher}
          />

          <GridItem
            itemDescr='Flashlights in every bedroom'
            itemIcon={flashlight}
          />

          <GridItem
            itemDescr='Sheets, Bath Towels & Beach Towels'
            itemIcon={sheets}
          />

          <GridItem
            itemDescr='Washing Machine & Dryer'
            itemIcon={washer}
          />

          <GridItem
            itemDescr='Iron & Ironing Board'
            itemIcon={iron}
          />

        </div>

      </div>

      <div>
        <h2 align='left'>Kitchen Amenities</h2>
        <div className="grid-container">

          <GridItem
            itemDescr='Keurig'
            itemIcon={keurig}
          />

          <GridItem
            itemDescr='Toaster Oven'
            itemIcon={toaster}
          />

          <GridItem
            itemDescr='Immersion Blender'
            itemIcon={iblender}
          />

          <GridItem
            itemDescr='Blender'
            itemIcon={blender}
          />

          <GridItem
            itemDescr='Crockpot'
            itemIcon={crockpot}
          />

          <GridItem
            itemDescr='Variety of Spices & Condiments'
            itemIcon={spices}
          />

          <GridItem
            itemDescr='Wine Opener'
            itemIcon={corkscrew}
          />

        </div>

      </div>

      <div>
        <h2 align='left'>Recreational</h2>
        <div className="grid-container">

          <GridItem
            itemDescr='Beach Gear - Chairs, Umbrellas'
            itemIcon={umbrella}
          />

          <GridItem
            itemDescr='Beach Towels'
            itemIcon={sheets}
          />


          <GridItem
            itemDescr='Community Pool'
            itemIcon={pool}
          />


          <GridItem
            itemDescr='Fishing Rods'
            itemIcon={rods}
          />


          <GridItem
            itemDescr='Fishing Dock'
            itemIcon={fishing}
          />


          <GridItem
            itemDescr='Dock for Water Toys'
            itemIcon={boat}
          />


          <GridItem
            itemDescr='Community Boat Ramp'
            itemIcon={ramp}
          />


          <GridItem
            itemDescr='Trailer Parking'
            itemIcon={jetski}
          />

        </div>

      </div>

      <div>
        <h2 align='left'>Personal Care</h2>
        <div className="grid-container">


          <GridItem
            itemDescr='Hair Dryer'
            itemIcon={hair_dryer}
          />

          <GridItem
            itemDescr='Dressing mirror'
            itemIcon={mirror}
          />

          <GridItem
            itemDescr='Lighted makeup mirror'
            itemIcon={mmirror}
          />

          <GridItem
            itemDescr='Shampoo & Conditioner'
            itemIcon={shampoo}
          />

          <GridItem
            itemDescr='Body Wash'
            itemIcon={soap}
          />

        </div>

      </div>
      
    </div>
  );
};



const GridItem = ({
  itemDescr,
  itemIcon
}) => {
  return (
    <div className="grid-item">
      <img className="Amenity-img" alt="Amenity-img" src={itemIcon} />
      <p>{itemDescr}</p>
    </div>
  );
};

export default Amenities;