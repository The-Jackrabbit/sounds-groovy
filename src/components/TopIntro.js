import {Image, Item} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';


const TopIntro = (props) => {
  return (
    <div
      align='center'
    >
      <Item
        centered={'true'}
        style={{
          margin: '65px 0px 20px 0px',
          width: '80%'
        }}
      >
        <Item.Content>
          <Image
            src={props.src}
            size='massive'
          />
          <Item.Header
            as='h1'
            content={props.header}
          />
          <Item.Description
            as='h4'
            content={props.description}
          />
        </Item.Content>
      </Item>
    </div>
  );
};


TopIntro.propTypes = {
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default TopIntro;