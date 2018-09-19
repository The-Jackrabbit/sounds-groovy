import React from 'react';
import {intro, sections} from './Data';
import {Grid, Header} from 'semantic-ui-react';
import TopIntro from '../../components/TopIntro';
import CardGroups from '../../components/CardGroups';


const Amenities = () => {
  return (
    <Grid
      style={{
        paddingBottom: '400px'
      }}
    >

      {/*  Intro section of the page  */}
      <Grid.Row>
        <TopIntro
          {...intro}
        />
      </Grid.Row>

      {/*  repeating amentity cards  */}
      {sections.map((sect, index) =>
        <div
          key={index}
          align='center'
        >
          <div
            style={{
              padding: '30px 0px 0px 0px'
            }}
            className="anchor"
            id={sect.title}
          />
          <Header
            as='h2'
            textAlign="center"
            style={{
              padding: '50px 10px 10px 0px'
            }}
            content={sect.title}
          />
          <CardGroups
            sect={sect.sect}
            size='mini'
          />
        </div>
      )}
    </Grid>
  );
};

export default Amenities;

/*

 */