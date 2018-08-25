// intro
import deck_life from '../../resources/images/corolla-duck-beach-rental.png';

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
  page_blurb:
    'Sounds Groovy OBX provides many amenities! Whether you are ' +
    'on vacation or visiting the Outer Banks for a family wedding, Sounds ' +
    'Groovy OBX has tried to think of your every need! Comfort and ' +
    'convenience is what we want for our visitors to Sounds Groovy OBX. ' +
    'The following are a few of the amenities you may find during your visit.'
};

export const sections = [
  // order counts
  {
    id: 'general',
    label: 'General',
    linkref: '#general'
  },
  {
    id: 2,
    label: 'Safety',
    linkref: '#safety'
  },
  {
    id: 3,
    label: 'Kitchen',
    linkref: '#kitchen'
  },
  {
    id: 4,
    label: 'Recreational',
    linkref: '#recreational'
  },
  {
    id: 5,
    label: 'Personal Care',
    linkref: '#personal'
  }
];

export const general = [
  {
    id: 1,
    item_descr: 'One King Bed',
    item_img: king
  },
  {
    id: 2,
    item_descr: 'Two Queen Beds',
    item_img: queen
  },
  {
    id: 3,
    item_descr: 'Sheets, Bath & Beach Towels',
    item_img: sheets
  },
  {
    id: 4,
    item_descr: 'Wifi',
    item_img: wifi
  },
  {
    id: 5,
    item_descr: 'Television',
    item_img: tv
  },
  {
    id: 6,
    item_descr: 'Cable Television',
    item_img: cable
  },
  {
    id: 7,
    item_descr: 'Heat & Air Conditioning',
    item_img: heat
  },
  {
    id: 8,
    item_descr: 'Free Parking',
    item_img: parking
  }
];

export const safety = [
  {
    id: 1,
    item_descr: 'Smoke Detectors',
    item_img: smoke
  },
  {
    id: 2,
    item_descr: 'Carbon Monoxide Detectors',
    item_img: monoxide
  },
  {
    id: 3,
    item_descr: 'First Aid Kit',
    item_img: first_aid_kit
  },
  {
    id: 4,
    item_descr: 'Fire Extinguisher - all levels',
    item_img: fire_extinguisher
  },
  {
    id: 5,
    item_descr: 'Flashlight - every bedroom',
    item_img: flashlight
  },
];

export const cooking = [
  {
    id: 1,
    item_descr: 'Generously Stocked Kitchen',
    item_img: kitchen
  },
  {
    id: 2,
    item_descr: 'Keurig',
    item_img: keurig
  },
  {
    id: 3,
    item_descr: 'Toaster Oven',
    item_img: toaster
  },
  {
    id: 4,
    item_descr: 'Immersion Blender',
    item_img: iblender
  },
  {
    id: 5,
    item_descr: 'Blender',
    item_img: blender
  },
  {
    id: 6,
    item_descr: 'Crockpot',
    item_img: crockpot
  },
  {
    id: 7,
    item_descr: 'Spices & Condiments',
    item_img: spices
  },
  {
    id: 8,
    item_descr: 'Wine Opener',
    item_img: corkscrew
  },
];

export const recreational = [
  {
    id: 1,
    item_descr: 'Beach Chairs & Umbrellas',
    item_img: umbrella
  },
  {
    id: 2,
    item_descr: 'Beach Towels',
    item_img: sheets
  },
  {
    id: 3,
    item_descr: 'Community Pool',
    item_img: pool
  },
  {
    id: 4,
    item_descr: 'Community Boat Ramp',
    item_img: ramp
  },
  {
    id: 5,
    item_descr: 'Fishing Rods',
    item_img: rods
  },
  {
    id: 6,
    item_descr: 'Fishing Dock',
    item_img: fishing
  },
  {
    id: 7,
    item_descr: 'Dock for Water Toys',
    item_img: boat
  },
  {
    id: 8,
    item_descr: 'Trailer Parking',
    item_img: jetski
  },
];

export const personal = [
  {
    id: 1,
    item_descr: 'Hair Dryer',
    item_img: hair_dryer
  },
  {
    id: 2,
    item_descr: 'Dressing mirror',
    item_img: mirror
  },
  {
    id: 3,
    item_descr: 'Lighted makeup mirror',
    item_img: mmirror
  },
  {
    id: 4,
    item_descr: 'Shampoo & Conditioner',
    item_img: shampoo
  },
  {
    id: 5,
    item_descr: 'Body Wash',
    item_img: soap
  },
  {
    id: 6,
    item_descr: 'Hangars',
    item_img: hangar
  },
  {
    id: 7,
    item_descr: 'Washer & Dryer',
    item_img: washer
  },
  {
    id: 8,
    item_descr: 'Iron & Ironing Board',
    item_img: iron
  },
];
