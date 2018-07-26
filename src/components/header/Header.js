import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/login'>Staff Login</Link>
      <Link to='/aadsfasdfsd'>404 Example</Link>
    </div>
  );
};

export default Header;
