import React from 'react';
import {Responsive} from 'semantic-ui-react';

import NavSideMenu from './NavSideMenu';
import NavTopMenu from './NavTopMenu';

// determines if mobile or desktop nav menu is required

const NavBar = () => {
  return (
    <div>
      <Responsive maxWidth={768}>
        <NavSideMenu/>
      </Responsive>

      <Responsive minWidth={768}>
        <NavTopMenu/>
      </Responsive>
    </div>
  );
};



export default NavBar;

/*

*/