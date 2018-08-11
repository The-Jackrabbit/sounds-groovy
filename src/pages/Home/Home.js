import React from 'react';
import FullscreenView from '../../components/fullscreen-view/FullscreenView';

import deck_life from '../../resources/images/corolla-duck-beach-rental.png';
import ourhouse from '../../resources/images/beach-house-rental-nags-head.png';
import sunrise from '../../resources/images/family-beach-vacation-north-carolina.png';
import sunset from '../../resources/images/cottage-vacation-kill-devil-hills.png';
import clouds from '../../resources/images/rental-kitty-hawk.png';
import sound_view from '../../resources/images/vacation-rental-outer-banks-nags-head.jpg';

const Home = () => {
  return (
    <div>


      <FullscreenView
        topText="Groovy - marvelous, wonderful, excellent!"
        bigText="Sounds Groovy OBX - Take a Photo Tour"
        buttonText='Book Now'
        buttonUrl='https://www.airbnb.com/rooms/26077543'
        imageUrl={sunrise}
      />

      <FullscreenView
        topText="Amenities"
        bigText="Why choose Sounds Groovy OBX?"
        buttonText='Why SGOBX?'
        buttonUrl='/amenities'
        imageUrl={deck_life}
      />


      {/*<FullscreenView*/}
      {/*topText="Take a look!"*/}
      {/*bigText="Groovy - marvelous, wonderful, excellent!"*/}
      {/*buttonText='Photo Tour'*/}
      {/*buttonUrl='/photos'*/}
      {/*imageUrl={sunrise}*/}
      {/*/>*/}


      <FullscreenView
        topText="WHAT TO DO NOW THAT YOU'RE HERE"
        bigText="Outer Banks GUIDE"
        buttonText='OBX Guide'
        buttonUrl='/guide'
        imageUrl={sunset}
      />


      <FullscreenView
        topText="Policies - let's make this fun!!"
        bigText="Rules, Groovy!"
        buttonText='Groovy Rules'
        buttonUrl='/rules'
        imageUrl={ourhouse}
      />


      <FullscreenView
        topText="Where in the world is Sounds Groovy OBX?!"
        bigText="Where are we?"
        buttonText='Location'
        buttonUrl='/location'
        imageUrl={clouds}
      />


      <FullscreenView
        topText="About Us"
        bigText="Who are we?"
        buttonText='Learn More'
        buttonUrl='/aboutus'
        imageUrl={sound_view}
      />

    </div>
  );
};

export default Home;
