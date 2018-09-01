import {Grid, Image, Responsive} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

const HomePageImage = ({ float, src }) => {
  return (
    <div>
      <Responsive maxWidth={768}>
        <Image style={{backgroundSize: 'cover', backgroundPosition: 'center'}} src={src}/>
      </Responsive>

      <Responsive minWidth={768}>
        <Grid.Column width={13} floated={float}>
          <Image style={{backgroundSize: 'cover', backgroundPosition: 'center', height: 'calc(100vh - 68px)'}} src={src}/>
        </Grid.Column>
      </Responsive>
    </div>
  );
};


HomePageImage.propTypes = {
  float: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default HomePageImage;

/*
height: 'calc(100vh - 60px)',
 style={{backgroundColor: 'pink', width: '100%', height: '100vh'}}

  style={{padding: '40px 10px 40px 10px'}}
 */