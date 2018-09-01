import {Grid, Header, Segment} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

const HomePageButton = ({ float, hdr, descr }) => {
  return (
    <Grid.Column width={3} verticalAlign='middle' floated={float}>
      <div align='center'>
        <p>{descr}</p>
        <Segment raised circular textAlign='center' style={{width: '80%'}}>
          <Header>{hdr}</Header>
        </Segment>
      </div>
    </Grid.Column>
  );
};


HomePageButton.propTypes = {
  float: PropTypes.string.isRequired,
  hdr: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
};

export default HomePageButton;

/*
height: 'calc(100vh - 60px)',
 style={{backgroundColor: 'pink', width: '100%', height: '100vh'}}

  style={{padding: '40px 10px 40px 10px'}}
 */