import React from 'react';
import '../../App.css';
import deck_life from '../../resources/images/corolla-duck-beach-rental.png';
// general
import sheets from '../../resources/svg/005-towel.svg';
import wifi from '../../resources/svg/028-wifi.svg';
import tv from '../../resources/svg/029-television.svg';
import cable from '../../resources/svg/030-cable-tv-sign-with-monitor.svg';
import heat from '../../resources/svg/031-smart-home.svg';
import parking from '../../resources/svg/032-parking.svg';
import king from '../../resources/svg/037-bed.svg';
import queen from '../../resources/svg/038-bed-1.svg';
// safety
import first_aid_kit from '../../resources/svg/003-medicine.svg';
import fire_extinguisher from '../../resources/svg/004-fire.svg';
import flashlight from '../../resources/svg/001-flashlight.svg';
import smoke from '../../resources/svg/035-smoke-detector.svg';
import monoxide from '../../resources/svg/036-smoke-detector-1.svg';
// kitchen
import keurig from '../../resources/svg/009-coffee-maker.svg';
import kitchen from '../../resources/svg/033-kitchen.svg';
import toaster from '../../resources/svg/010-microwave-oven.svg';
import iblender from '../../resources/svg/011-beater.svg';
import blender from '../../resources/svg/012-mixer.svg';
import crockpot from '../../resources/svg/013-cooking.svg';
import spices from '../../resources/svg/014-spices.svg';
import corkscrew from '../../resources/svg/015-bottle-opener.svg';
// recreational
import umbrella from '../../resources/svg/016-sunbed.svg';
import rods from '../../resources/svg/017-fishing-rod.svg';
import ramp from '../../resources/svg/018-boat-on-a-ramp.svg';
import jetski from '../../resources/svg/019-jet-ski.svg';
import boat from '../../resources/svg/020-speed-boat.svg';
import pool from '../../resources/svg/021-swimming-pool.svg';
import fishing from '../../resources/svg/023-fish-1.svg';
// personal care
import shampoo from '../../resources/svg/026-soap.svg';
import mirror from '../../resources/svg/024-furniture-and-household.svg';
import mmirror from '../../resources/svg/025-dresser.svg';
import soap from '../../resources/svg/027-shampoo.svg';
import hair_dryer from '../../resources/svg/002-dryer.svg';
import washer from '../../resources/svg/006-household.svg';
import iron from '../../resources/svg/008-iron-1.svg';
import hangar from '../../resources/svg/034-hanger.svg';


const Amenities = () => {
  return (
    <div className="topic">

      <div className="toc">
        <div className="button-wrapper">
          <h2>Why Choose Sounds Groovy OBX?</h2>

          <button>
            <a href="#general">General</a>
          </button>
          <br/>

          <button>
            <a href="#safety">Safety</a>
          </button>
          <br/>

          <button>
            <a href="#kitchen">Kitchen</a>
          </button>
          <br/>

          <button>
            <a href="#recreational">Recreational</a>
          </button>
          <br/>

          <button>
            <a href="#personal">Personal Care</a>
          </button>
        </div>
      </div>


      <div className="content">

        <div className="intro">
          <img alt="Amenities-img" src={deck_life}/>
          <h1 align="center">
            Amenities ... comfort and convenience!
          </h1>
          <p>
            Sounds Groovy OBX provides many amenities! Whether you are
            on vacation or visiting the Outer Banks for a family wedding, Sounds
            Groovy OBX has tried to think of your every need! Comfort and
            convenience is what we want for our visitors to Sounds Groovy OBX.
            The following are a few of the amenities you may find during your visit.
          </p>
        </div>

        <div className="main">

          <span className="anchor" id="general"></span>
          <div id="general" className="grid-main-sm">
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

          <span className="anchor" id="safety"></span>
          <div id="safety" className="grid-main-sm">
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

          <span className="anchor" id="kitchen"></span>
          <div id="kitchen"/>
          <div className="grid-main-sm">
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

          <span className="anchor" id="recreational"></span>
          <div id="recreational" className="grid-main-sm">
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

          <span className="anchor" id="personal"></span>
          <div id="personal" className="grid-main-sm">
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

      </div>
    </div>
  );
};


export default Amenities;