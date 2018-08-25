import {Divider, Grid, Image, Header, Segment} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

const square = {width: 165, height: 165};

const RightPage = ({  hdr, src, descr }) => {
  return (
    <Grid verticalAlign='middle'>
      <Grid.Row divided>
        <Grid.Column width={3} color='green'>
          <p>{descr}</p>
          <Segment circular style={square}>
            <Header>{hdr}</Header>
          </Segment>
        </Grid.Column>
        <Grid.Column width={13} color='blue'>
          <Image style={{padding: '40px'}} size='huge' src={src}/>
        </Grid.Column>
      </Grid.Row>
      <Divider/>
    </Grid>
  );
};

RightPage.propTypes = {
  src: PropTypes.string.isRequired,
  hdr: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
};

export default RightPage;