import React from 'react';
import {intro, sections} from './Data';
import {Grid, Header} from 'semantic-ui-react';
import TopIntro from '../../components/TopIntro';
import CardGroups from '../../components/CardGroups';


const Amenities = () => {
  return (
    <Grid
    >

      {/*  Intro section of the page  */}
      <Grid.Row>
        <TopIntro
          page_title={intro.page_title}
          page_img={intro.page_img}
          page_blurb={intro.page_blurb}
        />
      </Grid.Row>

      {/*  repeating amentity cards  */}
      {sections.map((sect, index) =>
        <div
          key={index}
          align='center'
        >
          <span
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
            imgSize='tiny'
            numPerRow='3'
          />
        </div>
      )}

    </Grid>
  );
};

export default Amenities;

/*

 */