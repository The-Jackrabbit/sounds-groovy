import React from 'react';
import {Grid, Menu} from 'semantic-ui-react';
import NavMenuItems from './NavMenuItems';
import Routes from '../../router';

const NavTopMenu = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <Menu
          fixed='top'
          size='large'
          borderless
          fluid
        >
          <NavMenuItems/>
        </Menu>
      </Grid.Row>
      <Grid.Row>
        <Routes/>
      </Grid.Row>
    </Grid>
  );
};

export default NavTopMenu;