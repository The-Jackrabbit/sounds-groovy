import {Container, Grid, Image, Header, Segment, Responsive} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';
import HomePageButton from './HomePageButton';

const RightPage = ({hdr, src, descr}) => {
  return (
    <Container>
      <Grid padded borderless>

        <HomePageButton float='right' hdr={hdr} descr={descr}/>

        <Grid.Column width={13} floated='right'>
          <Responsive {...Responsive.onlyMobile}>
            <Image style={{backgroundSize: 'cover', backgroundPosition: 'center'}} src={src}/>
          </Responsive>

          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Image style={{backgroundSize: 'cover', backgroundPosition: 'center', height: 'calc(100vh - 70px)'}} src={src}/>
          </Responsive>
        </Grid.Column>

      </Grid>
    </Container>
  );
};

RightPage.propTypes = {
  src: PropTypes.string.isRequired,
  hdr: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
};

export default RightPage;

// height='calc(100vh - 1500px)'