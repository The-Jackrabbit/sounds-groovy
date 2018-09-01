import {Divider, Grid, Image, Header, Segment, Container, Responsive} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';
import NavSideMenu from '../../components/Nav/NavSideMenu';
import NavTopMenu from '../../components/Nav/NavTopMenu';
import HomePageButton from './HomePageButton';

const LeftPage = ({ hdr, src, descr }) => {
  return (
    <Container>
      <Grid padded borderless>

          <Responsive {...Responsive.onlyMobile}>
            <Grid.Row>
              <Image style={{backgroundSize: 'cover', backgroundPosition: 'center'}} src={src}/>
            </Grid.Row>
          </Responsive>

          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
            <Grid.Column width={13} floated='left'>
              <Image style={{backgroundSize: 'cover', backgroundPosition: 'center', height: 'calc(100vh - 70px)'}} src={src}/>
            </Grid.Column>
          </Responsive>

        <HomePageButton float='left' hdr={hdr} descr={descr}/>

      </Grid>
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