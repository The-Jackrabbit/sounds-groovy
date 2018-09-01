import React from 'react';
import {Button, Grid, Header, Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import logo from '../../resources/logo.svg';
import {safety} from '../../pages/amenities/Data';
import Amenity from '../../pages/amenities/Amenity';

const items = [
  // order counts
  {key: 'booknow', name: 'Book Now', as: Link, to: '/AirBnB'},
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


const NavMenuItems = () => {
  return (
    <Grid>
      <Grid.Column only="computer">
        {/*<Menu fixed='top' size='massive'>*/}
          {/*<Menu.Item key='logo' as={Link} to='/' header>*/}
            {/*<Image size='mini' src={logo} style={{marginRight: '1.5em'}}/>*/}
            {/*Sounds Groovy OBX*/}
          {/*</Menu.Item>*/}

          {/*<Menu  size='huge' items={items} borderless/>*/}
        {/*</Menu>*/}
      {/*</Grid.Column>*/}

      {/*<Grid.Column only='tablet mobile'>*/}
        <div>
              {items.map(item => <Menu.Item
                key={item.key}
                as={item.as}
                to={item.to}
                name={item.name}
              />
              )}


        </div>
      </Grid.Column>

    </Grid>
  );
};

export default NavMenuItems;