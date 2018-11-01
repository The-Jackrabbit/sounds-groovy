import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {intro} from './Data';
import ReactPlayer from 'react-player';
import {Divider, Grid, Header, Image, List, Segment} from 'semantic-ui-react';
import TopIntro from '../../components/TopIntro';
import axios from 'axios';

const images = require.context('../../resources/images', true);

axios.defaults.baseURL = process.env.REACT_APP_SGOBX_DB_QUERY;

const BlogHeader = (props) => {
  // dbRec header --> title and date
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

class BlogTOC extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      error: undefined,
      isLoading: false,
    };
  }

  componentDidMount() {
    axios.get('toc')
      .then((result) => {
        this.setState({data: result.data});
      })
      .catch((error) => {
        this.setState({error});
      });
  }

  render() {
    const {data, isLoading, error} = this.state;
    if (!data) {
      return <p>No data yet ...</p>;
    }

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return [
      <List key={'dbRec.right.col'}>
        {data.map((hit, i) =>
          <List.Item
            key={i}
            as='a'
            href={'#' + hit.title}
          >
            {hit.date}, {hit.title}
          </List.Item>
        ).reverse()
        }
      </List>
    ];
  }
};

const BlogSubtitle = (props) => {
  // console.log('props.subtitle: ' + props.subtitle);
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
  let anchor_para = {__html: props.para};
  return (
    <div
      align='left'
      style={{
        targetNew: 'tab',
        fontSize: '1.2rem',
        padding: '10px',
        textAlign: 'justify',
      }}
      dangerouslySetInnerHTML={anchor_para}
    />
  );
};

const BlogImg = (props) => {
  return (
    props.image ?
      <Image
        style={{display: 'inherit'}}
        size='medium'
        floated='left'
        src={images(`./${props.image}`)}
        alt={props.image_alt_text}
      />
      : null
  );
};

const BlogVideo = (props) => {
  return (
    props.video
      ?
      <ReactPlayer
        url={props.video}
        controls={true}
      />
      : null
  );
};

const BlogParts = (props) => {
  /*  Props = Parts Array -- Subtitle, Body -- an array of dictionaries */
  console.log('image prop: ' + props.image);
  return [
    <Segment
      key={props.objectId}
      borderless={true}
      style={{
        background: 'None',
        boxShadow: 'None',
        border: 'None',
      }}
    >
      {props.parts.map((part) => {
        return ([
          <BlogSubtitle
            key={'bs' + part.id}
            {...part}
          />,
          <BlogImg
            key={'bi' + part.id}
            {...part}
          />,
          <BlogPara
            key={'bp' + part.id}
            {...part}
          />,
          <BlogVideo
            key={'bv' + part.id}
            {...part}
          />,
        ])}
      )
      }
    </Segment>
  ];
};


class Blog extends Component {

  constructor() {
    super();

    this.state = {
      dbData: [],
      blogData: [],
      error: undefined,
      isLoading: false,
    };
  }

  setupBlogData = () => {
    this.setState({isLoading: true});
    let dbResult = this.state.dbData;

    let dbBlogs = [];

    for (let i = 0, dbRec; i < dbResult.length; i++) {
      dbRec = dbResult[i];
      if (dbBlogs[(dbRec.post - 1)] === undefined) {
        let a_post = {};
        a_post['title'] = dbRec.title;
        a_post['topic'] = dbRec.topic;
        a_post['date'] = dbRec.date;
        a_post['parts'] = [];
        dbBlogs[(dbRec.post - 1)] = a_post;
      }

      let a_part = {};
      a_part['subtitle'] = dbRec.subtitle;
      a_part['para'] = dbRec.para;
      a_part['image'] = dbRec.image;
      a_part['video'] = dbRec.video;
      a_part['video_poster'] = dbRec.video_poster;

      dbBlogs[(dbRec.post - 1)]['parts'][dbRec.seq_num] = a_part;
    }
    this.setState({...this.state, isLoading: false, blogData: dbBlogs});
  };


  componentDidMount() {
    axios.get('blogs')
      .then((blogResult) => {
        this.setState({dbData: blogResult.data}, () => {
          this.setupBlogData();
        });
      })
      .catch((error) => {
        this.setState({error});
      });
  }

  render() {
    const {blogData, isLoading, error} = this.state;
    if (!blogData) {
      return <p>No blogData yet ...</p>;
    }

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return [
      <Grid
        key='blogGrid'
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
            key={'gridColumnLeft'}
            width={13}
          >
            {
              blogData.map((dbRec) =>
                <div
                  key={'div' + dbRec.id}
                >
                  <BlogHeader
                    key={'BlogHeader' + dbRec.id}
                    {...dbRec}
                  />
                  <BlogParts
                    key={'BlogParts' + dbRec.id}
                    {...dbRec}
                  />
                </div>
              ).reverse()
            }
          </Grid.Column>
          {/*  Blogs - End */}

          {/*  Blogs Table of Contents - Start  */}
          <Grid.Column
            key={'gridColumnRight'}
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
            <BlogTOC/>
          </Grid.Column>
          {/*  Blogs Table of Contents - End  */}

        </Grid.Row>

      </Grid>
    ];
  };
};

BlogSubtitle.propTypes = {
  subtitle: PropTypes.string,
};

BlogImg.propTypes = {
  image: PropTypes.string,
};

BlogVideo.propTypes = {
  video: PropTypes.string,
  video_poster: PropTypes.string,
};


BlogPara.propTypes = {
  para: PropTypes.string,
};

BlogParts.propTypes = {
  parts: PropTypes.array,
};

export default Blog;

/*
{
        return ([
          <div
            key={part.id}
            className="ui clearing segment"
            style={{
              background: 'None',
              boxShadow: 'None',
              border: 'None',
              padding: '0px',
              margin: '0px',
            }}
          >
            <BlogSubtitle {...part} />
            <BlogPara {...part} />
            <BlogVideo {...part} />
          </div>,
          <BlogImg {...part} />
        ])}

 */