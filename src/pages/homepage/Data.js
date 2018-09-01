import deck_life from '../../resources/images/corolla-duck-beach-rental.JPG';
import sunrise from '../../resources/images/family-beach-vacation-north-carolina.JPG';
import sunset from '../../resources/images/cottage-vacation-kill-devil-hills.JPG';
import ourhouse from '../../resources/images/beach-house-rental-nags-head.JPG';
import clouds from '../../resources/images/rental-kitty-hawk.JPG';
import sound_view from '../../resources/images/vacation-rental-outer-banks-nags-head.JPG';


export const cards = [
  {
    id: 'booknow',
    postleft: true,
    isalink: false,
    myhref: 'https://www.airbnb.com/rooms/26077543',
    image_src: sunrise,
    description: 'Groovy - marvelous, wonderful, excellent!',
    header: 'Sounds Groovy OBX - Take a Photo Tour'
  },
  {
    id: 'amenities',
    postleft: false,
    isalink: true,
    tolink: '/Amenities',
    image_src: deck_life,
    description: 'Why amenities, of course!!',
    header: 'Why Choose Sounds Groovy OBX?'
  },
  {
    id: 'guide',
    postleft: true,
    isalink: true,
    tolink: '/guide',
    image_src: sunset,
    description: 'What to do now that you are here!',
    header: 'Outer Banks Guide'
  },
  {
    id: 'rules',
    postleft: false,
    isalink: true,
    tolink: '/rules',
    image_src: ourhouse,
    description: 'Policies - let\'s make this fun!!',
    header: 'Rules, Groovy!'
  },
  {
    id: 'location',
    postleft: true,
    isalink: true,
    tolink: '/location',
    image_src: clouds,
    description: 'Where in the world is Sounds Groovy OBX?!',
    header: 'Where Are We?'
  },
  {
    id: 'aboutus',
    postleft: false,
    isalink: true,
    tolink: '/aboutus',
    image_src: sound_view,
    description: 'Who are we?',
    header: 'Learn More About Us'
  }
];