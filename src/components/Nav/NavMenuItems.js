import React from 'react';
import {Grid, Menu, Responsive} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {menu_lists} from './Data';
import LogoHeader from './LogoHeader';
import DropdownSubMenuItems from './DropdownSubMenuItems';
import AccordionSubMenuItems from './AccordionSubMenuItems';

// works with both sidebar and topbar menu to present the menu items

const NavMenuItems = (props) => {
  const handleButtonClick = () => {
    console.log('handling button click');
    props.sidebarVisible();
  }

  return <Grid
    padded
  >
    {/*  SGOBX brand - logo and name  */}
    <LogoHeader
      sidebarVisible={props.sidebarVisible}
    />


    {/*  menu items  */}

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
          />;
        }
      })
    }

  </Grid>;
};


NavMenuItems.propTypes = {
  sidebarVisible: PropTypes.func,
};

export default NavMenuItems;

/*

  {key: 'blog', name: 'Blog', as: Link, to: '/'},
  {key: 'faq', name: 'FAQ', as: Link, to: '/'},
  {key: 'guests', name: 'Guests', as: Link, to: '/'},
  {key: 'contactus', name: 'Contact Us', as: Link, to: '/'},


 */