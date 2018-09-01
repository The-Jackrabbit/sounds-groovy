import {Link} from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import LeftOrRight from './LeftOrRight';
import {Grid} from 'semantic-ui-react';

const ALink = ({tolink, hdr, src, descr, postleft}) => {
  // Wraps LeftOrRight in a link versus an anchor
  return (
    <Grid as={Link} to={tolink}>
      <LeftOrRight
        hdr={hdr}
        src={src}
        descr={descr}
        postleft={postleft}
      />
    </Grid>
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