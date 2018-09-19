import ourhouse from '../../resources/images/beach-house-rental-nags-head.JPG';

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
  header: 'Yes, rules, even on vacation!',
  src: ourhouse,
  description: `
    These policies are focused on safety for our guests and consideration for our
    neighbors.  Let's chat if you find them concerning!
    `
};

export const sections = [
  // order counts
  {
    sect: [
      {
        src: checkinout,
        header: 'Check-In & Check-Out',
        description: `
      Check-in is anytime after 5PM.  Check-out by 10AM.  Put the dirty towels 
      in the shower.  Fill and run the dishwasher.  Place trash in bins out by the 
      curb.
      `
      },
      {
        src: children,
        header: 'Children',
        description: `
      Not safe or suitable for children (0-12 years) - The house
      sits directly on the waterway, there are no safety fences. 
      The house has many 2nd, 3rd, 4th level outdoor areas where
      a child could fall.
      `
      },
      {
        src: smoking,
        header: 'Smoking',
        description: `
      No smoking - Our home is equipped with NEST smoke and carbon
      monoxide detector for your safety. Super sensitive, it will
      alert us if it detects the slightest amount of smoke in the
      home.
      `
      },
      {
        src: parties,
        header: 'Parties',
        description: `
      No parties or events. The house sits close to neighbors and we
      want our guests to be considerate of them.
      `
      },
      {
        src: pets,
        header: 'Pets',
        description: `
      Not suitable for pets
      `
      },
      {
        src: parking,
        header: 'Parking',
        description: `
      No parking on the front lawn/ septic field area. There is plenty
      of parking in the driveway (~3 cars) plus there is an additional
      parking pad at the front of the yard for cars or trailers.
      `
      },
      {
        src: stairs,
        header: 'Stairs',
        description: `
      Must climb stairs - The house sits on stilts.
      Bedroom level is on level #2. Main living area is
      on level #3. Crow's nest is on level #4.
      `
      },
      {
        src: deposit,
        header: 'Security Deposit',
        description: `
      Security Deposit - if you damage the home, you may be charged up to $200
      `
      },
      {
        src: surveillance,
        header: 'Surveillance',
        description: `
      Surveillance or recording devices on property - The home has a video
      doorbell outside front door. There is an Alexa on the far nightstand
      from the door in the Master Bedroom. If you are comfortable with it,
      please feel free to use it. If not, then just unplug it.
      `
      },
    ]
  }
];