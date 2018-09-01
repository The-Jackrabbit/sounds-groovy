import React from 'react';
import {Grid, Image, Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import logo from '../../resources/logo.svg';

const items = [
  // order counts
  {key: 'amenities', name: 'Amenities', as: Link, to: '/Amenities'},
  {key: 'guide', name: 'OBX Guide', as: Link, to: '/Guide'},
  {key: 'location', name: 'Location', as: Link, to: '/Location'},
  {key: 'rules', name: 'Policies', as: Link, to: '/Rules'},
  {key: 'aboutus', name: 'About Us', as: Link, to: '/AboutUs'},
];


const NavMenuItems = () => {
  return (

    <Grid centered padded>
      <Menu.Item key='logo' as={Link} to='/' header>
        <Image centered verticalAlign='middle' size='mini' src={logo} style={{marginRight: '1.5em'}}/>
        Sounds Groovy OBX
      </Menu.Item>

      <Menu.Item key='airbnb' href='https://www.airbnb.com/rooms/26077543'>
        Book Now
      </Menu.Item>

      {items.map(item => <Menu.Item
        key={item.key}
        as={item.as}
        to={item.to}
        name={item.name}
      />
      )}
    </Grid>
  );
};

export default NavMenuItems;

/*

  {key: 'blog', name: 'Blog', as: Link, to: '/'},
  {key: 'faq', name: 'FAQ', as: Link, to: '/'},
  {key: 'guests', name: 'Guests', as: Link, to: '/'},
  {key: 'contactus', name: 'Contact Us', as: Link, to: '/'},


 */