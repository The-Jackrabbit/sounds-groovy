import React from 'react';
import PropTypes from 'prop-types';
import {intro, blogs} from './Data';
import {Player} from 'video-react';
import {Divider, Grid, Header, Image, List, Segment} from 'semantic-ui-react';
import TopIntro from '../../components/TopIntro';
import '../../video-react.css';


const BlogHeader = (props) => {
  // blog header --> title and date
  return [
    <span
      key={'header.anchor.span.' + props.index}
      id={props.title}
      style={{
        display: 'block',
        height: '115px', /*same height as header*/
        marginTop: '-115px', /*same height as header*/
        visibility: 'hidden',
      }}
    />,
    <Divider
      key={'header.divider.' + props.index}
      section={true}
      style={{
        marginTop: '22px'
      }}
    />,
    <Header
      key={'header.' + props.index}
      as='h1'
    >
      {props.title}
    </Header>,
    <span
      key={'header.span.' + props.index}
    >
      {props.date}
    </span>,
  ];
};

const BlogTOC = (props) => {
  return [
    <List
      key={'blog.right.col' + props.index}
    >
      <List.Item
        key={'blog.right.col.item.' + props.index}
        as='a'
        href={'#' + props.title}
      >
        {props.date}, {props.title}
      </List.Item>
    </List>
  ];
};

const BlogSubtitle = (props) => {
  return (
    props.subtitle
      ?
      <Header
        as='h3'
        content={props.subtitle}
      />
      : null
  );
};

const BlogPara = (props) => {
  let anchor_para = {__html: props.para}
  return (
    <div
      align='left'
      style={{
        fontSize: '1.5rem',
        padding: '10px',
        textAlign: 'justify',
      }}
      dangerouslySetInnerHTML={anchor_para}
    />
  );
};

const BlogImg = (props) => {
  return (
    props.img
      ?
      <Image
        style={{display: 'inherit'}}
        size='medium'
        floated='left'
        src={props.img}
      />
      : null
  );
};

const BlogVideo = (props) => {
  return [
    props.video
      ?
      <Player
        key={'blog.video.' + props.index}
        src={props.video}
        poster={props.poster}
      />
      : null
  ];
};

const BlogParts = (props) => {
  /*  Props = Parts Array -- Subtitle, Body -- an array of dictionaries */
  return [
    <Segment
      key={'segment.' + props.idx}
      borderless={true}
      style={{
        background: 'None',
        boxShadow: 'None',
        border: 'None',
      }}
    >
      <div
        key={'blog.part.' + props.idx}
        className="ui clearing segment"
        style={{
          background: 'None',
          boxShadow: 'None',
          border: 'None',
          padding: '0px',
          margin: '0px',
        }}
      >
        <BlogSubtitle
          {...props}
        />
        {props.body.map((bodyparts, index) =>
          [
            <BlogImg
              key={index}
              {...bodyparts}
            />,
            <BlogPara
              key={index}
              {...bodyparts}
            />,
            <BlogVideo
              key={index}
              {...bodyparts}
            />,
          ]
        )}
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

      {/*  Start of Blogs  */}
      <Grid.Row
      >

        {/*  Blogs - Start */}
        <Grid.Column
          width={13}
        >
          {
            blogs.map((blog, index) =>
              <div
                key={'div.blog.header.' + index}
              >
                <BlogHeader
                  key={'blog.header.' + index}
                  {...blog}
                  index={index}
                />
                {
                  blog.parts.map((part, idx) =>
                    // console.log('PARTS--> ' + part.subtitle)
                    <BlogParts
                      key={'blog.part.' + idx}
                      index={idx}
                      {...part}
                    />
                  )
                }
              </div>
            )
          }
        </Grid.Column>
        {/*  Blogs - End */}

        {/*  Blogs Table of Contents - Start  */}
        <Grid.Column
          width={3}
          floated='right'
        >
          <Header
            floated='left'
            content='Archives'
          />

          <Divider
            section={true}
          />
          {
            blogs.map((blog, index) =>
              <BlogTOC
                key={'blog.toc.' + index}
                index={index}
                {...blog}
              />
            )
          }
        </Grid.Column>
        {/*  Blogs Table of Contents - End  */}

      </Grid.Row>

    </Grid>
  ];
};

BlogSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

BlogImg.propTypes = {
  img: PropTypes.string.isRequired,
};

BlogTOC.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

BlogPara.propTypes = {
  para: PropTypes.string.isRequired,
};

BlogParts.propTypes = {
  parts: PropTypes.array.isRequired,
};

export default Blog;

/*


 */