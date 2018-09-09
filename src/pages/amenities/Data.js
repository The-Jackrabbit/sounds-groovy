// intro
import deck_life from '../../resources/images/corolla-duck-beach-rental.JPG';

// general
import king from '../../resources/svg/037-bed.svg';
import queen from '../../resources/svg/038-bed-1.svg';
import sheets from '../../resources/svg/005-towel.svg';
import wifi from '../../resources/svg/028-wifi.svg';
import tv from '../../resources/svg/029-television.svg';
import cable from '../../resources/svg/030-cable-tv-sign-with-monitor.svg';
import heat from '../../resources/svg/031-smart-home.svg';
import parking from '../../resources/svg/032-parking.svg';

// safety
import first_aid_kit from '../../resources/svg/003-medicine.svg';
import fire_extinguisher from '../../resources/svg/004-fire.svg';
import flashlight from '../../resources/svg/001-flashlight.svg';
import smoke from '../../resources/svg/035-smoke-detector.svg';
import monoxide from '../../resources/svg/036-smoke-detector-1.svg';
import keypad from '../../resources/svg/050-keypad.svg';

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


export const intro = {
  page_title: 'Amenities ... comfort and convenience!',
  page_img: deck_life,
  page_blurb: `
    Sounds Groovy OBX provides many amenities! Whether you are
    on vacation or visiting the Outer Banks for a family wedding, Sounds 
    Groovy OBX has tried to think of your every need! Comfort and 
    convenience is what we want for our visitors to Sounds Groovy OBX.
    The following are a few of the amenities you may find during your visit.
    `
};

export const sections = [
  // order counts
  { title: 'General',
    sect: [
      {
        descr: 'One King Bed',
        imgUrl: king
      },
      {
        descr: 'Two Queen Beds',
        imgUrl: queen
      },
      {
        descr: 'Sheets, Bath & Beach Towels',
        imgUrl: sheets
      },
      {
        descr: 'Wifi',
        imgUrl: wifi
      },
      {
        descr: 'Television',
        imgUrl: tv
      },
      {
        descr: 'Cable Television',
        imgUrl: cable
      },
      {
        descr: 'Heat & Air Conditioning',
        imgUrl: heat
      },
      {
        descr: 'Free Parking',
        imgUrl: parking
      }
    ]
  },
  { title: 'Kitchen',
    sect:[
      {
        descr: 'Generously Stocked Kitchen',
        imgUrl: kitchen
      },
      {
        descr: 'Keurig',
        imgUrl: keurig
      },
      {
        descr: 'Toaster Oven',
        imgUrl: toaster
      },
      {
        descr: 'Immersion Blender',
        imgUrl: iblender
      },
      {
        descr: 'Blender',
        imgUrl: blender
      },
      {
        descr: 'Crockpot',
        imgUrl: crockpot
      },
      {
        descr: 'Spices & Condiments',
        imgUrl: spices
      },
      {
        descr: 'Wine Opener',
        imgUrl: corkscrew
      },
    ]
  },
  { title: 'Personal Care',
    sect:[
      {
        descr: 'Hair Dryer',
        imgUrl: hair_dryer
      },
      {
        descr: 'Dressing mirror',
        imgUrl: mirror
      },
      {
        descr: 'Lighted makeup mirror',
        imgUrl: mmirror
      },
      {
        descr: 'Shampoo & Conditioner',
        imgUrl: shampoo
      },
      {
        descr: 'Body Wash',
        imgUrl: soap
      },
      {
        descr: 'Hangars',
        imgUrl: hangar
      },
      {
        descr: 'Washer & Dryer',
        imgUrl: washer
      },
      {
        descr: 'Iron & Ironing Board',
        imgUrl: iron
      },
    ]
  },
  { title: 'Recreational',
    sect:[
      {
        descr: 'Beach Chairs & Umbrellas',
        imgUrl: umbrella
      },
      {
        descr: 'Beach Towels',
        imgUrl: sheets
      },
      {
        descr: 'Community Pool',
        imgUrl: pool
      },
      {
        descr: 'Community Boat Ramp',
        imgUrl: ramp
      },
      {
        descr: 'Fishing Rods',
        imgUrl: rods
      },
      {
        descr: 'Fishing Dock',
        imgUrl: fishing
      },
      {
        descr: 'Dock for Water Toys',
        imgUrl: boat
      },
      {
        descr: 'Trailer Parking',
        imgUrl: jetski
      },
    ]
  },
  { title: 'Safety',
    sect:[
      {
        descr: 'Smoke Detectors',
        imgUrl: smoke
      },
      {
        descr: 'Carbon Monoxide Detectors',
        imgUrl: monoxide
      },
      {
        descr: 'First Aid Kit',
        imgUrl: first_aid_kit
      },
      {
        descr: 'Fire Extinguisher - all levels',
        imgUrl: fire_extinguisher
      },
      {
        descr: 'Flashlight - every bedroom',
        imgUrl: flashlight
      },
      {
        descr: 'Keyless Entry',
        imgUrl: keypad
      }
    ]
  },
];


