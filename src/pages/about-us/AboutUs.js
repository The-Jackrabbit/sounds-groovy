import React from 'react';
import {intro, sections} from './Data';
import {Card, Grid} from 'semantic-ui-react';
import TopIntro from '../../components/TopIntro';


const AboutUs = () => {
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

      {/*  Start of the AboutUs sections  */}
      {sections.map((sect, index) =>
        <Card
          style={{width: '70%'}}
          key={index}
        >
          <Card.Content>
            <Card.Header
              as='h1'
              content={sect.header}
            />
            <Card.Description
              as='h3'
              content={sect.description}
              textAlign='left'
            />
          </Card.Content>
        </Card>
      )}

    </Grid>
  );
};


export default AboutUs;

/*       <div
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
          <Story
            sect={sect.sect}
          />
        </div>


        <Item>
          <Item.Content>
            <Image
              src={intro.page_img}
              size='massive'
            />
            <Item.Header
              as='h1'
              content={intro.page_title}
            />
            <Item.Description
              as='h3'
              content={intro.page_blurb}
            />
          </Item.Content>
        </Item>
 */