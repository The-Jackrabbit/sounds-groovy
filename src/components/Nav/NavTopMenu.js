import React from 'react';
import {Grid, Menu} from 'semantic-ui-react';
import NavMenuItems from './NavMenuItems';
import Routes from '../../router';

const NavTopMenu = () => {
  return (
    <Grid centered padded>
      <Grid.Row>
        <div align='center'>
          <Menu fixed='top' size='huge' borderless header>
            <NavMenuItems/>
          </Menu>
        </div>
      </Grid.Row>
      <Grid.Row>
        <Routes/>
      </Grid.Row>
    </Grid>
  );
};

export default NavTopMenu;