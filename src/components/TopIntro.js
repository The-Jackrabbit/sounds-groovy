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
            src={props.page_img}
            size='massive'
          />
          <Item.Header
            as='h1'
            content={props.page_title}
          />
          <Item.Description
            as='h3'
            content={props.page_blurb}
          />
        </Item.Content>
      </Item>
    </div>
  );
};


TopIntro.propTypes = {
  page_blurb: PropTypes.string.isRequired,
  page_img: PropTypes.string.isRequired,
  page_title: PropTypes.string.isRequired,
};

export default TopIntro;