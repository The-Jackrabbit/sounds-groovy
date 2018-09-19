import React from 'react';
import {intro, sections} from './Data';
import {Grid} from 'semantic-ui-react';
import TopIntro from '../../components/TopIntro';
import CardGroups from '../../components/CardGroups';


const Rules = () => {
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

      {/*  Start of the Rules sections  */}

      {sections.map((sect, index) =>
        <div
          key={index}
        >
          <CardGroups
            sect={sect.sect}
            size='tiny'
          />
        </div>
      )}

    </Grid>
  );
};


export default Rules;

/*

 */