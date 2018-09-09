import React from 'react';
import {Container, Header, Image} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// Provides a more simplistic rendering of content than CardGroups
/*  Renders each section  */
const ImageGroups = (props) => {
  // Image Groups Inputs: name; descr; siteURL; and, imgSize
  return (
    <Image.Group
      centered='true'
      // itemsPerRow={props.numPerRow}
    >
      {/*  Handles each item in the section  */}
      {
        props.sect.map((item_data, index) =>
          <div key={index}>
            {/*<Header*/}
              {/*as='h1'*/}
              {/*content={item_data.name}*/}
            {/*/>*/}
            <Image
              src={item_data.imgUrl}
              size={props.imgSize}
              label={item_data.name}
            />
            <p>
              {item_data.descr}
            </p>

          </div>
        )
      }
    </Image.Group>
  );
};



ImageGroups.defaultProps = {
  // numPerRow: '2',
};

ImageGroups.propTypes = {
  sect: PropTypes.array.isRequired,
  imgSize: PropTypes.string.isRequired,
  numPerRow: PropTypes.string
};

export default ImageGroups;

/*


          <Container
            key={index}
            as='a'
            href={item_data.siteUrl}
          >
            <Header
              as='h1'
              content={item_data.name}
            />
            <Image
              src={item_data.imgUrl}
              size={props.imgSize}
              label={item_data.name}
            />
            <p>
              {item_data.descr}
            </p>
          </Container>

 */