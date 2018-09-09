import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// Provides a more sophisticated rendering of content than ImageGroups
/*  Renders each Guide section  */
const CardGroups = (props) => {
  // Card Groups Inputs: name; descr; siteURL; and, imgSize
  return (
    <Card.Group
      centered
      // itemsPerRow={props.numPerRow}
    >
      {/*  Handles each Place in the Guide section  */}
      {
        props.sect.map((card_data, index) =>
          <Card
            key={index}
            as='a'
            href={card_data.siteUrl}
          >
            <Card.Content>
              <Card.Header
                as='h1'
                content={card_data.name}
              />
              <Image
                src={card_data.imgUrl}
                size={props.imgSize}
              />
              <Card.Description
                // as='h4'
                style={{
                  paddingTop:'11px'
                }}
                content={card_data.descr}
              />
            </Card.Content>
          </Card>
        )
      }
    </Card.Group>
  );
};



CardGroups.defaultProps = {
  // numPerRow: '2',
};

CardGroups.propTypes = {
  sect: PropTypes.array.isRequired,
  imgSize: PropTypes.string.isRequired,
  numPerRow: PropTypes.string
};

export default CardGroups;