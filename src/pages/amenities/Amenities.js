import React from 'react';
import '../../App.css';
import deck_life from '../../resources/images/0622181427-EFFECTS.png';
// general
import sheets from '../../resources/my-icons-collection/svg/005-towel.svg';
import wifi from '../../resources/my-icons-collection/svg/028-wifi.svg';
import tv from '../../resources/my-icons-collection/svg/029-television.svg';
import cable from '../../resources/my-icons-collection/svg/030-cable-tv-sign-with-monitor.svg';
import heat from '../../resources/my-icons-collection/svg/031-smart-home.svg';
import parking from '../../resources/my-icons-collection/svg/032-parking.svg';
import king from '../../resources/my-icons-collection/svg/037-bed.svg';
import queen from '../../resources/my-icons-collection/svg/038-bed-1.svg';
// safety
import first_aid_kit from '../../resources/my-icons-collection/svg/003-medicine.svg';
import fire_extinguisher from '../../resources/my-icons-collection/svg/004-fire.svg';
import flashlight from '../../resources/my-icons-collection/svg/001-flashlight.svg';
import smoke from '../../resources/my-icons-collection/svg/035-smoke-detector.svg';
import monoxide from '../../resources/my-icons-collection/svg/036-smoke-detector-1.svg';
// kitchen
import keurig from '../../resources/my-icons-collection/svg/009-coffee-maker.svg';
import kitchen from '../../resources/my-icons-collection/svg/033-kitchen.svg';
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
import washer from '../../resources/my-icons-collection/svg/006-household.svg';
import iron from '../../resources/my-icons-collection/svg/008-iron-1.svg';
import hangar from '../../resources/my-icons-collection/svg/034-hanger.svg';


const Amenities = () => {
  return (
    <div className="topic">
      <div className="intro">
        <img alt="Amenities" src={deck_life}/>
        <h2>
          Amenities ... provide comfort, convenience, and/ or pleasure!
        </h2>
        <p>
          Sounds Groovy OBX seeks to provide many amenities! Whether you are
          on vacation or visiting the Outer Banks for a family wedding, Sounds
          Groovy OBX has tried to think of your every need! Comfort and
          convenience is what we want for our visitors to Sounds Groovy OBX.
          The following are a few of the amenities you may find during your visit.
        </p>
      </div>

      <div className="grid-content">
        <h2>General</h2>

        <div className="grid-item">
          <img alt="Amenity-img" src={king}/>
          <p>One King Bed</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={queen}/>
          <p>Two Queen Beds</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={sheets}/>
          <p>Sheets, Bath & Beach Towels</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={wifi}/>
          <p>Wifi</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={tv}/>
          <p>Television</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={cable}/>
          <p>Cable Television</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={heat}/>
          <p>Heat & Air Conditioning</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={parking}/>
          <p>Free Parking</p>
        </div>
      </div>

      <div className="grid-content">
        <h2>Safety</h2>

        <div className="grid-item">
          <img alt="Amenity-img" src={smoke}/>
          <p>Smoke Detectors</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={monoxide}/>
          <p>Carbon Monoxide Detectors</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={first_aid_kit}/>
          <p>First Aid Kit</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={fire_extinguisher}/>
          <p>Fire Extinguishers on all levels</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={flashlight}/>
          <p>Flashlights in every bedroom</p>
        </div>

      </div>

      <div className="grid-content">
        <h2>Kitchen</h2>

        <div className="grid-item">
          <img alt="Amenity-img" src={kitchen}/>
          <p>Generously Stocked Kitchen</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={keurig}/>
          <p>Keurig</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={toaster}/>
          <p>Toaster Oven</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={iblender}/>
          <p>Immersion Blender</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={blender}/>
          <p>Blender</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={crockpot}/>
          <p>Crockpot</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={spices}/>
          <p>Spices & Condiments</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={corkscrew}/>
          <p>Wine Opener</p>
        </div>

      </div>

      <div className="grid-content">
        <h2>Recreational</h2>

        <div className="grid-item">
          <img alt="Amenity-img" src={umbrella}/>
          <p>Beach Chairs & Umbrellas</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={sheets}/>
          <p>Beach Towels</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={pool}/>
          <p>Community Pool</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={ramp}/>
          <p>Community Boat Ramp</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={rods}/>
          <p>Fishing Rods</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={fishing}/>
          <p>Fishing Dock</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={boat}/>
          <p>Dock for Water Toys</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={jetski}/>
          <p>Trailer Parking</p>
        </div>

      </div>

      <div className="grid-content">
        <h2>Personal Care</h2>

        <div className="grid-item">
          <img alt="Amenity-img" src={hair_dryer}/>
          <p>Hair Dryer</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={mirror}/>
          <p>Dressing mirror</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={mmirror}/>
          <p>Lighted makeup mirror</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={shampoo}/>
          <p>Shampoo & Conditioner</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={soap}/>
          <p>Body Wash</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={hangar}/>
          <p>Hangars</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={washer}/>
          <p>Washer & Dryer</p>
        </div>

        <div className="grid-item">
          <img alt="Amenity-img" src={iron}/>
          <p>Iron & Ironing Board</p>
        </div>

      </div>

    </div>
  );
};


export default Amenities;