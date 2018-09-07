import {Container, Grid, Responsive} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';
import HomePageButton from './HomePageButton';
import HomePageImage from './HomePageImage';

const RightPage = ({hdr, src, descr}) => {
  let float = 'right';
  return (
    <Container>

      <Responsive maxWidth={768}>
        <Grid
          columns={1}
          padded
          borderless="true"
          centered
        >
          <HomePageImage float={float} src={src}/>
          <HomePageButton float={float} hdr={hdr} descr={descr}/>
        </Grid>
      </Responsive>

      <Responsive minWidth={768}>
        <Grid columns={2} padded borderless>
          <Grid.Column width={3} verticalAlign='middle' floated={float}>
            <HomePageButton float={float} hdr={hdr} descr={descr}/>
          </Grid.Column>
          <Grid.Column width={13} floated={float}>
            <HomePageImage float={float} src={src}/>
          </Grid.Column>
        </Grid>
      </Responsive>

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

/*


      <Responsive maxWidth={768}>

 */