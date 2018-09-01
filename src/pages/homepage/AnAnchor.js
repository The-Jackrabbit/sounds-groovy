import React from 'react';
import PropTypes from 'prop-types';
import LeftOrRight from './LeftOrRight';
import {Grid} from 'semantic-ui-react';

const AnAnchor = ({myhref, hdr, src, descr, postleft}) => {
  return (
    <Grid as='a' href={myhref}>
      <LeftOrRight
        hdr={hdr}
        src={src}
        descr={descr}
        postleft={postleft}
      />
    </Grid>
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