import ourhouse from '../../resources/images/beach-house-rental-nags-head.png';

// cards

import children from '../../resources/svg/042-baby-boy.svg';
import smoking from '../../resources/svg/043-cigarrete.svg';
import parties from '../../resources/svg/041-group.svg';
import pets from '../../resources/svg/044-pet.svg';
import parking from '../../resources/svg/045-parking-1.svg';
import stairs from '../../resources/svg/046-man-descending-stairs.svg';
import surveillance from '../../resources/svg/048-cctv.svg';
import deposit from '../../resources/svg/047-money.svg';
import checkinout from '../../resources/svg/049-check-in-desk.svg';

export const intro = {
  page_title: 'Yes, rules, even on vacation!',
  page_img: ourhouse,
  page_blurb:
    'These policies are focused on safety for our guests and consideration for our ' +
    'neighbors.  Let\'s chat if you find them concerning!'
};

export const sections = [
  // order counts
  {
    id: 1,
    label: 'Children',
    linkref: '#children'
  },
  {
    id: 2,
    label: 'Smoking',
    linkref: '#smoking'
  },
  {
    id: 3,
    label: 'Parties',
    linkref: '#parties'
  },
  {
    id: 4,
    label: 'Pets',
    linkref: '#pets'
  },
  {
    id: 5,
    label: 'Parking',
    linkref: '#parking'
  },
  {
    id: 6,
    label: 'Stairs',
    linkref: '#stairs'
  },
  {
    id: 7,
    label: 'Security Deposit',
    linkref: '#deposit'
  },
  {
    id: 8,
    label: 'Surveillance',
    linkref: '#surveillance'
  },
  {
    id: 9,
    label: 'Check In & Out',
    linkref: '#check-in-out'
  }
];

export const cards = [
  {
    id: 'children',
    image: {
      src: children,
      size: 'tiny',
      centered: true,
      backgroundColor: 'white'
    },
    header: 'Children',
    description:
      'Not safe or suitable for children (0-12 years) - The house ' +
      'sits directly on the waterway, there are no safety fences. ' +
      'The house has many 2nd, 3rd, 4th level outdoor areas where ' +
      'a child could fall.'
  },
  {
    id: 'smoking',
    image: {
      src: smoking,
      size: 'tiny',
      centered: true
    },
    header: 'Smoking',
    description:
      'No smoking - Our home is equipped with NEST smoke and carbon\n' +
      'monoxide detector for your safety. Super sensitive, it will\n' +
      'alert us if it detects the slightest amount of smoke in the\n' +
      'home.'
  },
  {
    id: 'parties',
    image: {
      src: parties,
      size: 'tiny',
      centered: true
    },
    header: 'Parties',
    description:
      'No parties or events. The house sits close to neighbors and we\n' +
      'want our guests to be considerate of them.'
  },
  {
    id: 'pets',
    image: {
      src: pets,
      size: 'tiny',
      centered: true
    },
    header: 'Pets',
    description:
      'Not suitable for pets'
  },
  {
    id: 'parking',
    image: {
      src: parking,
      size: 'tiny',
      centered: true
    },
    header: 'Parking',
    description:
      'No parking on the front lawn/ septic field area. There is plenty\n' +
      'of parking in the driveway (~3 cars) plus there is an additional\n' +
      'parking pad at the front of the yard for cars or trailers.'
  },
  {
    id: 'stairs',
    image: {
      src: stairs,
      size: 'tiny',
      centered: true
    },
    header: 'Stairs',
    description:
      'Must climb stairs - The house sits on stilts.\n' +
      'Bedroom level is on level #2. Main living area is\n' +
      'on level #3. Crow\'s nest is on level #4.'
  },
  {
    id: 'deposit',
    image: {
      src: deposit,
      size: 'tiny',
      centered: true
    },
    header: 'Security Deposit',
    description:
      'Security Deposit - if you damage the home, you may be charged up to $200'
  },
  {
    id: 'surveillance',
    image: {
      src: surveillance,
      size: 'tiny',
      centered: true
    },
    header: 'Surveillance',
    description:
      'Surveillance or recording devices on property - The home has a video\n' +
      'doorbell outside front door. There is an Alexa on the far nightstand\n' +
      'from the door in the Master Bedroom. If you are comfortable with it,\n' +
      'please feel free to use it. If not, then just unplug it.'
  },
  {
    id: 'check-in-out',
    image: {
      src: checkinout,
      size: 'tiny',
      centered: true
    },
    header: 'Check-In & Check-Out',
    description:
      'Check-in is anytime after 5PM\nCheck-out by 10AM'
  }
];