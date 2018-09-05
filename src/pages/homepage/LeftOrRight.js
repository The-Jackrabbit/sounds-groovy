import LeftPage from './LeftPage';
import RightPage from './RightPage';
import React from 'react';
import PropTypes from 'prop-types';


const LeftOrRight = ({postleft, hdr, descr, src}) => {
  if (postleft)
    return (
      <LeftPage
        hdr={hdr}
        descr={descr}
        src={src}
      />
    );
  return (
    <RightPage
      hdr={hdr}
      descr={descr}
      src={src}
    />
  );
};

LeftOrRight.propTypes = {
  src: PropTypes.string.isRequired,
  hdr: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  postleft: PropTypes.bool.isRequired,
};

export default LeftOrRight;