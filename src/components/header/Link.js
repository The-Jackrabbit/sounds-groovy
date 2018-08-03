import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string,
  current: PropTypes.string,
  to: PropTypes.string,
};

const CustomLink = ({to, current, children}) => {
  return (
    <Link to={to} className={
      current === to ? 'active' : null
    }>
      {children}
    </Link>
  );
};

CustomLink.propTypes = propTypes;

export default CustomLink;
