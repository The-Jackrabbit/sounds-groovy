import React from 'react';
import TopIntro from '../../components/TopIntro';
import {intro} from '../contact-us/Data';
import {Grid} from 'semantic-ui-react';

const ContactUs = () => {
  return (
    <Grid
      centered={true}
    >

      {/*  Intro section of the page  */}
      <Grid.Row>
        <TopIntro
          {...intro}
        />
      </Grid.Row>

      {/*  Start of the Contact Us body  */}


    </Grid>
  );
};
export default ContactUs;
