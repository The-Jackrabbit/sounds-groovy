import React, {Component} from 'react';
import Routes from '../../router';
import {Menu, Segment, Sidebar, Sticky} from 'semantic-ui-react';
import NavMenuItems from './NavMenuItems';

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

        {/*  shows the hamburger menu button  */}
        <Menu fixed='top'>
          <Menu.Item
            position='right'
            onClick={this.handleButtonClick}
            icon='bars'
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
              visible={visible}
              style={{
                width: '200px',
              }}
            >
              <NavMenuItems sidebarVisible={this.handleButtonClick}/>
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