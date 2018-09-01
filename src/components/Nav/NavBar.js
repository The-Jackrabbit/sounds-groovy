import React from 'react';
import {Responsive} from 'semantic-ui-react';

import NavSideMenu from './NavSideMenu';
import NavTopMenu from './NavTopMenu';


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
}



export default NavBar;

/*
    <Grid>
      <Grid.Column only="computer">
        <NavTopMenu/>
      </Grid.Column>

      <Grid.Column only='tablet mobile'>
        <NavSideMenu/>
      </Grid.Column>
    </Grid>

    <div>
      <Responsive maxWidth={768}>
        <NavSideMenu/>
      </Responsive>

      <Responsive minWidth={768}>
        <NavTopMenu/>
      </Responsive>
    </div>

<Grid>
  <Grid.Column only="computer">
    <Responsive maxWidth={768}>
      <NavSideMenu/>
    </Responsive>
  </Grid.Column>

  <Grid.Column only='tablet mobile'>
    <Responsive minWidth={768}>
      <NavTopMenu/>
    </Responsive>
  </Grid.Column>
</Grid>
*/