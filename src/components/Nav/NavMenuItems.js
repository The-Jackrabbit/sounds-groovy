import React from 'react';
import {Button, Grid, Header, Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import logo from '../../resources/logo.svg';

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

let state = { visible: false }

let handleButtonClick = () => this.setState({ visible: !this.state.visible })

let handleSidebarHide = () => this.setState({ visible: false })

const NavMenu = () => {
  const { visible } = state
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
          <Button onClick={this.handleButtonClick} icon>
            <Icon name='bars' />
          </Button>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='overlay'
              direction='left'
              icon='labeled'
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              width='wide'
            >
              <Menu.Item as='a'>Home</Menu.Item>
              <Menu.Item as='a'>Games</Menu.Item>
              <Menu.Item as='a'>Channels</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
              <Segment basic>
                <Header as='h3'>Sounds Groovy OBX</Header>
                <Image size='small' src={logo} />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Grid.Column>

    </Grid>
  );
};

export default NavMenu;