import React, {Component} from 'react';
import Routes from '../../router';
import {Menu, Segment, Sidebar} from 'semantic-ui-react';
import NavMenuItems from './NavMenuItems';

export default class NavSideMenu extends Component {
  state = {
    visible: false
  };

  handleButtonClick = () => this.setState({
    visible: !this.state.visible
  });

  handleSidebarHide = () => this.setState({
    visible: false
  });

  render() {
    const {visible} = this.state;

    return (
      <div>

        <Menu fixed='top'>
          <Menu.Item position='right' onClick={this.handleButtonClick} icon='bars'/>
        </Menu>

        <Sidebar.Pushable as='Segment'>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <NavMenuItems/>
          </Sidebar>

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