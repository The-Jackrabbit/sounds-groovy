import React from 'react';
import {Image, Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import logo from '../resources/logo.svg';

const items = [
  // order counts
  {key: 'booknow', name: 'Book Now', href: '//www.airbnb.com/rooms/26077543'},
  {key: 'aboutus', name: 'About Us', as: Link, to: '/AboutUs'},
  {key: 'amenities', name: 'Amenities', as: Link, to: '/Amenities'},
  {key: 'blog', name: 'Blog', as: Link, to: '/'},
  {key: 'contactus', name: 'Contact Us', as: Link, to: '/'},
  {key: 'faq', name: 'FAQ', as: Link, to: '/'},
  {key: 'guests', name: 'Guests', as: Link, to: '/'},
  {key: 'guide', name: 'OBX Guide', as: Link, to: '/Guide'},
  {key: 'location', name: 'Location', as: Link, to: '/Location'},
  {key: 'rules', name: 'Policies', as: Link, to: '/Rules'},
];

const NavMenu = () => {
  return (
    <Menu fixed='top'>
      <Menu.Item key='logo' as={Link} to='/' header>
        <Image size='mini' src={logo} style={{marginRight: '1.5em'}}/>
        Sounds Groovy OBX
      </Menu.Item>

      <Menu stackable items={items} borderless/>
    </Menu>
  );
};

export default NavMenu;