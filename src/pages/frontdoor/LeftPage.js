import {Divider, Grid, Image, Header, Segment} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';


const square = {width: 165, height: 165};

const LeftPage = ({ hdr, src, descr }) => {
  return (
    <Grid verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={13} color='blue'>
          <Image style={{padding: '40px'}} size='huge' src={src}/>
        </Grid.Column>
        <Grid.Column width={3} color='green' float='right'>
          {/*<Segment  style={{padding: '8px'}}>*/}
          <p>{descr}</p>
          <Segment circular style={square}>
            <Header>{hdr}</Header>
          </Segment>
          {/*</Segment>*/}
        </Grid.Column>
      </Grid.Row>
      <Divider/>
    </Grid>
  );
};

LeftPage.propTypes = {
  src: PropTypes.string.isRequired,
  hdr: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
};

export default LeftPage;