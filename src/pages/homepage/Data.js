import deck_life from '../../resources/images/corolla-duck-beach-rental.JPG';
import sunrise from '../../resources/images/family-beach-vacation-north-carolina.JPG';
import sunset from '../../resources/images/cottage-vacation-kill-devil-hills.JPG';
import ourhouse from '../../resources/images/beach-house-rental-nags-head.JPG';
import clouds from '../../resources/images/rental-kitty-hawk.JPG';
import sound_view from '../../resources/images/vacation-rental-outer-banks-nags-head.JPG';


export const cards = [
  {
    id: 'booknow',
    float: 'left',
    href: 'https://www.airbnb.com/rooms/26077543',
    src: sunrise,
    description: 'Groovy - marvelous, wonderful, excellent!',
    header: 'Sounds Groovy OBX - Take a Photo Tour'
  },
  {
    id: 'amenities',
    float: 'right',
    href: '/Amenities',
    src: deck_life,
    description: 'Why Choose Sounds Groovy OBX?',
    header: 'Why amenities, of course!!',
  },
  {
    id: 'guide',
    float: 'left',
    href: '/guide',
    src: sunset,
    description: 'What to do now that you are here!',
    header: 'Outer Banks Guide'
  },
  {
    id: 'rules',
    float: 'right',
    href: '/rules',
    src: ourhouse,
    description: 'Policies - let\'s make this fun!!',
    header: 'Rules, Groovy!'
  },
  {
    id: 'location',
    float: 'left',
    href: '/location',
    src: clouds,
    description: 'Where in the world is Sounds Groovy OBX?!',
    header: 'Where Are We?'
  },
  // {
  //   id: 'aboutus',
  //   float: 'right',
  //   href: '/aboutus',
  //   src: sound_view,
  //   description: 'Who are we?',
  //   header: 'Learn More About Us'
  // },
  {
    id: 'contactus',
    float: 'left',
    href: '/contactus',
    src: clouds,
    description: 'Drop us a line!',
    header: 'Communication is key!'
  },
  {
    id: 'blog',
    float: 'right',
    href: '/blog',
    src: sound_view,
    description: 'Come along on our journey!',
    header: 'Stories and more stories!'
  }
];