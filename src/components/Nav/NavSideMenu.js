import React, {Component} from 'react';
import Routes from '../../router';
import {Menu, Segment, Sidebar, Sticky} from 'semantic-ui-react';
import NavMenuItems from './NavMenuItems';
import LogoHeader from './LogoHeader';

// presents the mobile sidebar menu

export default class NavSideMenu extends Component {
  state = {
    visible: false
  };

  handleButtonClick = () => this.setState({
    // toggle
    visible: !this.state.visible
  });

  handleSidebarHide = () => this.setState({
    visible: false
  });

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { visible, contextRef } = this.state;

    return (
      <div
      >
        <Menu
          fixed='top'
          borderless
          style={{
            boxShadow: 'none',
          }}
        >

          {/*  SGOBX brand - logo and name  */}
          <LogoHeader
          />

          {/*  shows the hamburger menu button  */}
          <Menu.Item
            position='right'
            onClick={this.handleButtonClick}
            icon='bars'
            style={{
              // boxShadow: 'none',
            }}
          />
        </Menu>

        {/*  wraps the sidebar menu as a leftside pushable  */}
        <Sidebar.Pushable
          as='Segment'
        >
          <Sticky context={contextRef}>
            <Sidebar
              as={Menu}
              animation='overlay'
              onHide={this.handleSidebarHide}
              vertical
              borderless
              className='item'
              visible={visible}
              style={{
                top: '100px',
                width: '150px',
                maxHeight: '60%',
                // textAlign: 'left',
                // paddingLeft: '100px'
              }}
            >
              <NavMenuItems
                sidebarVisible={this.handleButtonClick}
                style={{
                  paddingLeft: '100px'
                }}
              />
            </Sidebar>
          </Sticky>

          <Sidebar.Pusher>
            <Segment basic>
              <Routes/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>

    );
  }
}

/*

 */