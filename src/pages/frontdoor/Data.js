import deck_life from '../../resources/images/corolla-duck-beach-rental.png';
import sunrise from '../../resources/images/family-beach-vacation-north-carolina.png';


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
    description: 'Why SGOBX?',
    header: 'Why choose Sounds Groovy OBX?'
  }];