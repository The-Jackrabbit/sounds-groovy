import React from 'react';
import {Grid, Menu} from 'semantic-ui-react';
import NavMenuItems from './NavMenuItems';
import Routes from '../../router';
import LogoHeader from './LogoHeader';

// presents the desktop top bar menu

const NavTopMenu = () => {
  return (
    <Grid centered>
      <Grid.Row>
        <Menu
          fixed='top'
          size='massive'
          borderless
          fluid
          style={{
            boxShadow: 'none',
            zIndex: '1',
          }}
        >
          {/*  SGOBX brand - logo and name  */}
          <LogoHeader
          />
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