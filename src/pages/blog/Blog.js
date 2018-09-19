import React from 'react';
import {intro, sections} from './Data';
import {Divider, Grid, Header, Image, List, Segment} from 'semantic-ui-react';
import TopIntro from '../../components/TopIntro';


const BlogHeader = (props) => {
  return [
    <Divider
      key={props.key}
      section={true}
      id={props.date}
      style={{
        marginTop: '22px'
      }}
    />,
    <Header
      as='h1'
      key={props.key}
    >
      {props.title}
    </Header>,
    <span
      key={props.key}
    >
      {props.date}
    </span>,
    <Divider
      key={props.key}
      hidden/>
  ];
};

const BlogPara = (props) => {
  return [
    <Segment
      key={props.key}
      borderless={true}
      style={{
        background: 'None',
        boxShadow: 'None',
        border: 'None'
      }}
    >
      {
        props.subtitle
          ?
          <Header
            key={props.key}
            as='h3'
            content={props.subtitle}
          />
          : null
      }
      <div
        key={props.key}
        className="ui clearing segment"
        borderless={true}
        style={{
          background: 'None',
          boxShadow: 'None',
          border: 'None'
        }}
      >
        {
          props.img
            ?
            <Image
              key={props.key}
              style={{display: 'inherit'}}
              size='medium'
              floated='left'
              src={props.img}
              onError={i => i.target.style.display = 'none'}
            />
            : null
        }
        <p align='left'>
          {props.body}
        </p>
      </div>
    </Segment>
  ];
};

const Blog = () => {
  return [
    <Grid
      key='blog'
      container={true}
      centered={true}
      style={{
        marginBottom: '100px'
      }}
    >

      {/*  Intro section of the page  */}
      <Grid.Row>
        <TopIntro
          {...intro}
        />
      </Grid.Row>

      {/*  Start of the Blog sections  */}
      <Grid.Row
      >

        {/*  Blog Articles - Start */}
        <Grid.Column
          width={11}
        >
          {
            sections.map((sect, index) =>
              <div
                key={'div.blog.header' + index}
              >
                <BlogHeader
                  key={'blog.header' + index}
                  {...sect}
                  index={index}
                />
                {
                  sect.parts.map((part, idx) =>
                    <BlogPara
                      key={'blog.' + index + '.blog.para.' + idx}
                      {...part}
                    />
                  )
                }
              </div>
            )
          }
        </Grid.Column>
        {/*  Blog Articles - End */}

        {/*  Blog Table of Contents - Start  */}
        <Grid.Column
          width={4}
          floated='right'
        >
          <Header
            floated='top'
            content='Archives'
          />

          <Divider
            section={true}
          />
          {sections.map((sect, index) =>
            <List
              key={'blog.right.col' + index}
            >
              <List.Item
                as='a'
                href={'#' + sect.date}
              >
                {sect.date}, {sect.title}
              </List.Item>
            </List>
          )}
        </Grid.Column>
        {/*  Blog Table of Contents - End  */}

      </Grid.Row>

    </Grid>
  ];
};


export default Blog;

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