import React from 'react';
import PropTypes from 'prop-types';
import LeftOrRight from './LeftOrRight';

const AnAnchor = ({myhref, hdr, src, descr, postleft}) => {
  return (
    <a href={myhref}>
      <LeftOrRight
        hdr={hdr}
        src={src}
        descr={descr}
        postleft={postleft}
      />
    </a>
  );
};

AnAnchor.propTypes = {
  src: PropTypes.string.isRequired,
  hdr: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  myhref: PropTypes.string.isRequired,
  postleft: PropTypes.string.isRequired
};

export default AnAnchor;