import {Header, Segment} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

const HomePageButton = ({float, hdr, descr}) => {
  return (
    <div align='center'>
      <p style={{marginTop: '11px'}}>{descr}</p>
      <Segment padded raised circular textAlign='center' style={{width: '60%'}}>
        <Header size='small'>{hdr}</Header>
      </Segment>
    </div>
  );
};


HomePageButton.propTypes = {
  float: PropTypes.string.isRequired,
  hdr: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
};

export default HomePageButton;

/*

 */