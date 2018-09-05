import React from 'react';
import {intro, sections} from './Data';
import {Grid, Header} from 'semantic-ui-react';
import TopIntro from '../../components/TopIntro';
import CardGroups from '../../components/CardGroups';


const Guide = () => {
  return (
    <Grid
      centered={true}
    >

      {/*  Intro section of the page  */}

      <Grid.Row>
        <TopIntro
          page_title={intro.page_title}
          page_img={intro.page_img}
          page_blurb={intro.page_blurb}
        />
      </Grid.Row>

      {/*  Start of the Guide sections  */}

      {sections.map((sect, index) =>
        <div
          key={index}
        >
          <span
            id={sect.title}
            className="anchor"
          />
          <Header
            as='h2'
            style={{
              padding: '50px 0px 0px 30px'
            }}
            content={sect.title}
          />
          <CardGroups
            sect={sect.sect}
            imgSize='medium'
          />
        </div>
      )}

    </Grid>
  );
};


export default Guide;

/*

 */