import {Link} from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import LeftOrRight from './LeftOrRight';

const ALink = ({tolink, hdr, src, descr, postleft}) => {
  // Wraps LeftOrRight in a link versus an anchor
  return (
    <Link to={tolink}>
      <LeftOrRight
        hdr={hdr}
        src={src}
        descr={descr}
        postleft={postleft}
      />
    </Link>
  );
};

ALink.propTypes = {
  tolink: PropTypes.string.isRequired,
  postleft: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  hdr: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired
};

export default ALink;