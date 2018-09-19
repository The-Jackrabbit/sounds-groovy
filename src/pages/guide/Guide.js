import React from 'react';
import {intro, sections} from './Data';
import {Grid, Header} from 'semantic-ui-react';
import TopIntro from '../../components/TopIntro';
import CardGroups from '../../components/CardGroups';


const Guide = () => {
  return (
    <Grid
      centered={true}
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
              padding: '65px 0px 0px 30px'
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