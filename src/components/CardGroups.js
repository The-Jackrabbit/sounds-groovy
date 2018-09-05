import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import PropTypes from 'prop-types';

/*  Renders each Guide section  */
const CardGroups = (props) => {
  return (
    <Card.Group
      centered
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
                as='h3'
                content={card_data.descr}
              />
            </Card.Content>
          </Card>
        )
      }
    </Card.Group>
  );
};


CardGroups.propTypes = {
  sect: PropTypes.object.isRequired,
  imgSize: PropTypes.string.isRequired,
};

export default CardGroups;