import React from 'react';
import FullscreenView from '../../components/fullscreen-view/FullscreenView';
import sound_view from '../../resources/images/0526181018.jpg';
import deck_life from '../../resources/images/0622181427-EFFECTS.png';
import ourhouse from '../../resources/images/0622181509d_HDR.png';
import sunrise from '../../resources/images/0622180529c-EFFECTS.png';
import sunset from '../../resources/images/0628182027b.png';
import clouds from '../../resources/images/0621181945l.png';

const Home = () => {
  return (
    <div>
      <FullscreenView
        topText="About Us"
        bigText="Who are we?"
        buttonText='Learn More'
        buttonUrl='/aboutus'
        imageUrl={sound_view}
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

    </div>
  );
};

export default Home;
