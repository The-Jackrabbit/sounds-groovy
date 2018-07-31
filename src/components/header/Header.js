import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import logo from '../../resources/sgobxlogo.ico';

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <img src={logo} alt="Sounds Groovy OBX" height="100" width="100" align='middle'></img>
        <Link to='/'>Home</Link>
        <Link to='/aboutus'>About Us</Link>
        <Link to='/location'>Location</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/amenities'>Amenities</Link>
        <Link to='/rules'>Rules, Groovy!</Link>
        <Link to='/guide'>OBX Guide</Link>
        <Link to='/guests'>Groovy Guests!</Link>
        <Link to='/faq'>FAQ</Link>
        <Link to='/blog'>BLOG</Link>
        <Link to='/contactus'>Contact Us</Link>

        {/* <Link to='/login'>Staff Login</Link>
      <Link to='/aadsfasdfsd'>404 Example</Link> */}
      </div>
    </div>
  );
};

export default Header;
