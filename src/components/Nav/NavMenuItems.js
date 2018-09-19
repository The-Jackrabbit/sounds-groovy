import React from 'react';
import {Grid, Menu, Responsive} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {menu_lists} from './Data';
import DropdownSubMenuItems from './DropdownSubMenuItems';
import AccordionSubMenuItems from './AccordionSubMenuItems';

// works with both sidebar and topbar menu to present the menu items

const NavMenuItems = (props) => {
  const handleButtonClick = () => {
    console.log('handling button click');
    props.sidebarVisible();
  };

  /*  menu items -- called by both top and side menus  */
  return (
    <Grid
      padded
      style={{
        textAlign: 'left',
        boxShadow: 'none',
        padding: '10px 0px 10px 22px'
      }}
    >
      {
        menu_lists.map((a_menu, index) => {
          if (a_menu.subs.length > 0) {
            return (
              <div
                key={index}
                className='item'
              >
                <Responsive maxWidth={768}>
                  <AccordionSubMenuItems
                    key={index}
                    a_menu={a_menu}
                    sidebarVisible={props.sidebarVisible}
                  />
                </Responsive>

                <Responsive minWidth={768}>
                  <DropdownSubMenuItems
                    key={index}
                    a_menu={a_menu}
                  />
                </Responsive>
              </div>
            );
          } else {
            return <Menu.Item
              key={index}
              href={a_menu.to + '#top'}
              name={a_menu.name}
              onClick={handleButtonClick}
              style={{
                textAlign: 'left',
              }}
            />;
          }
        })
      }
    </Grid>
  );
};


NavMenuItems.propTypes = {
  sidebarVisible: PropTypes.func,
};

export default NavMenuItems;

/*

 */