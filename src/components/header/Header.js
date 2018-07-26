import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import MdLaunch from 'react-icons/lib/md/launch';

const Header = () => {
  return (
    <div className="header-container">
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/login'>Staff Login</Link>
      <Link to='/aadsfasdfsd'>404 Example</Link>
      <a className='airbnb' href='http://www.airbnb.com/rooms/26077543?location=Nags%20Head%2C%20NC'>Airbnb <MdLaunch /></a>
      
    </div>
  );
};

export default Header;
