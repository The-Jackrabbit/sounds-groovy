import {Grid, Container, Responsive} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';
import HomePageButton from './HomePageButton';
import HomePageImage from './HomePageImage';

const LeftPage = ({hdr, src, descr}) => {
  let float = 'left';
  return (
    <Container>
      <Responsive maxWidth={768}>
        <Grid
          columns={1}
          padded
          borderless="true"
          centered
          style={{padding: '40px 10px 40px 10px'}}
        >
          <HomePageImage float={float} src={src}/>
          <HomePageButton float={float} hdr={hdr} descr={descr}/>
        </Grid>
      </Responsive>

      <Responsive minWidth={768}>
        <Grid columns={2} padded borderless>
          <Grid.Column width={13} floated={float}>
            <HomePageImage float={float} src={src}/>
          </Grid.Column>
          <Grid.Column width={3} verticalAlign='middle' floated={float}>
            <HomePageButton float={float} hdr={hdr} descr={descr}/>
          </Grid.Column>
        </Grid>
      </Responsive>

    </Container>
  );
};


LeftPage.propTypes = {
  src: PropTypes.string.isRequired,
  hdr: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
};

export default LeftPage;

/*
height: 'calc(100vh - 60px)',
 style={{backgroundColor: 'pink', width: '100%', height: '100vh'}}

  style={{padding: '40px 10px 40px 10px'}}
 */