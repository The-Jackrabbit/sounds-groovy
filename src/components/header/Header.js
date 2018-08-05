import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../resources/logo.svg';
import CustomLink from './Link';
import './Header.css';

const propTypes = {
  location: PropTypes.object,
};

const Header = ({ location }) => {
  const current = location.pathname;

  return (
    <div className="header-container">
      <Link to='/' style={{ verticalAlign: 'initial' }}>
        <img src={logo} alt="Sounds Groovy OBX" height="60" width="40" align='middle' />
      </Link>
      <CustomLink to='/aboutus' current={current}>About Us</CustomLink>
      <CustomLink to='/location' current={current}>Location</CustomLink>
      <CustomLink to='/gallery' current={current}>Gallery</CustomLink>
      <CustomLink to='/amenities' current={current}>Amenities</CustomLink>
      <CustomLink to='/rules' current={current}>Rules, Groovy!</CustomLink>
      <CustomLink to='/guide' current={current}>OBX Guide</CustomLink>
      <CustomLink to='/guests' current={current}>Groovy Guests!</CustomLink>
      <CustomLink to='/faq' current={current}>FAQ</CustomLink>
      <CustomLink to='/blog' current={current}>BLOG</CustomLink>
      <CustomLink to='/contactus' current={current}>Contact Us</CustomLink>
    </div>
  );
};

Header.propTypes = propTypes;

export default withRouter((props) => <Header {...props} />);
