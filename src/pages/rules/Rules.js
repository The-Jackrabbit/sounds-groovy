import React from 'react';
import '../../App.css';
import ourhouse from '../../resources/images/beach-house-rental-nags-head.png';


const Rules = () => {
  return (
    <div className="topic">
      <div className="intro">
        <img alt="Rules-img" src={ourhouse}/>
        <h2>Yes, rules, even on vacation!</h2>
        <p>These policies are focused on safety for our guests and consideration for our neighbors.
          Let's chat if you find them concerning! </p>
      </div>

      <div className="content-sm">
        <h3>Children</h3>
        <p>
          Not safe or suitable for children (0-12 years) - The house
          sits directly on the waterway, there are no safety fences.
          The house has many 2nd, 3rd, 4th level outdoor areas where
          a child could fall.
        </p>
      </div>

      <div className="content-sm">
        <h3>Smoking</h3>
        <p>
          No smoking - Our home is equipped with NEST smoke and carbon
          monoxide detector for your safety. Super sensitive, it will
          alert us if it detects the slightest amount of smoke in the
          home.
        </p>
      </div>

      <div className="content-sm">
        <h3>Parties</h3>
        <p>
          No parties or events.  The house sits close to neighbors and we
          want our guests to be considerate of them.
        </p>
      </div>

      <div className="content-sm">
        <h3>Pets</h3>
        <p>
          Not suitable for pets
        </p>
      </div>

      <div className="content-sm">
        <h3>Parking</h3>
        <p>
          No parking on the front lawn/ septic field area.  There is plenty
          of parking in the driveway (~3 cars) plus there is an additional
          parking pad at the front of the yard for cars or trailers.
        </p>
      </div>

      <div className="content-sm">
        <h3>Stairs</h3>
        <p>
          Must climb stairs - The house sits on stilts.
          Bedroom level is on level #2. Main living area is
          on level #3. Crow's nest is on level #4.
        </p>
      </div>

      <div className="content-sm">
        <h3>Security Deposit</h3>
        <p>
          Security Deposit - if you damage the home, you may be charged up to $200
        </p>
      </div>

      <div className="content-sm">
        <h3>Surveillance</h3>
        <p>
          Surveillance or recording devices on property - The home has a video
          doorbell outside front door.  There is an Alexa on the far nightstand
          from the door in the Master Bedroom.  If you are comfortable with it,
          please feel free to use it.  If not, then just unplug it.
        </p>
      </div>

      <div className="content-sm">
        <h3>Check-In</h3>
        <p>
          Check-in is anytime after 5PM
        </p>
      </div>

      <div className="content-sm">
        <h3>Check-Out</h3>
        <p>
          Check-out by 10AM
        </p>
      </div>

    </div>
  );
};

export default Rules;