import React from 'react';
import {Grid, Image, Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import logo from '../../resources/logo.svg';
import SubMenuItems from './SubMenuItems';
import {menu_lists} from './Data';


const NavMenuItems = () => {
  return <Grid
    centered
    padded
  >
    <Menu.Item
      key='logo'
      as={Link}
      to='/'
      header
    >
      <Image
        centered
        verticalAlign='middle'
        size='mini'
        src={logo}
        style={{
          marginRight: '1.5em'
        }}
      />
      Sounds Groovy OBX
    </Menu.Item>

    <Menu.Item
      key='airbnb'
      header
      href='https://www.airbnb.com/rooms/26077543'
      style={{
        textAlign: 'left',
        margin: '5px 0px 0px -10px',
      }}
    >
      Book Now
    </Menu.Item>

    {
      menu_lists.map(a_menu => {
        if (a_menu.subs.length > 0) {
          return <SubMenuItems
            key={a_menu.name}
            a_menu={a_menu}
          />;
        } else {
          return <Menu.Item
            key={a_menu.to}
            header
            as={Link}
            to={a_menu.to}
            name={a_menu.name}
            style={{
              textAlign: 'left',
              margin: '0px 0px 0px -10px',
              boxShadow: 'none',
            }}
          />;
        }
      })
    }

  </Grid>;
};


export default NavMenuItems;

/*



    {menu_lists.map(a_menu => {
      (() => {
        console.log("# Subs: " + a_menu.subs.length);
        if (a_menu.subs.length > 0) {
          console.log( "Sub");
          return <SubMenuItems
            key={a_menu.name}
            a_menu={a_menu}/>;
        } else {
          console.log( "Menu");
          return <Menu.Item key={a_menu.to} to={a_menu.to} header name={a_menu.name}/>;
        }
      })();
    })}



  {key: 'blog', name: 'Blog', as: Link, to: '/'},
  {key: 'faq', name: 'FAQ', as: Link, to: '/'},
  {key: 'guests', name: 'Guests', as: Link, to: '/'},
  {key: 'contactus', name: 'Contact Us', as: Link, to: '/'},


 */