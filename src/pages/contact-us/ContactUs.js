import React from 'react';
import deck_life from '../../resources/images/0622181427-EFFECTS.png';

const ContactUs = () => {
  return (
    <div className="intro">
      {/*change image*/}
      <img alt="Contact-Us" src={deck_life}/>
      <h2>
        Contact Us ...
      </h2>
      <p>
        Contact us at ...
      </p>
    </div>
  );
};
export default ContactUs;
