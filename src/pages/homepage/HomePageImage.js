import {Grid, Image, Responsive} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

const HomePageImage = (props) => {
  return (
    <Grid.Column
      width={props.cols}
      className='img-container'
    >
      <Responsive maxWidth={768}>
        <Image style={{backgroundSize: 'cover', backgroundPosition: 'center'}} src={props.src}/>
      </Responsive>

      <Responsive minWidth={768}>
        <Image
          floated={props.float}
          // className='img-container'
          style={{
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            // maxWidth: '100%',
            maxHeight: 'calc(100vh - 65px)',
            // display: 'block',
            // backgroundAttachment: 'fixed',
            // height: 'calc(100vh - 68px)'
            // height: '100%',
            // width: '100%'

            // position: 'absolute',
            // display: 'block',
            // left: '0',
            // right: '0',
            // top: '0',
            // bottom: '0',
            // margin: 'auto',
          }}
          src={props.src}
        />
      </Responsive>
    </Grid.Column>
  );
};


HomePageImage.propTypes = {
  float: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  cols: PropTypes.number.isRequired,
};

export default HomePageImage;

/*
height: 'calc(100vh - 60px)',
 style={{backgroundColor: 'pink', width: '100%', height: '100vh'}}

  style={{padding: '40px 10px 40px 10px'}}
 */