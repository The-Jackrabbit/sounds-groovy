import React, {Component} from 'react';
import {Dropdown, Divider} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SubMenuItems from './SubMenuItems';

// works with both sidebar and topbar menu to present the submenu items

export default class DropdownSubMenuItems extends Component {
  render() {
    return (
      <Dropdown
        text={this.props.a_menu.name}
        item
        style={{
          padding: '0px'
        }}
      >
        <Dropdown.Menu
        >
          {/*  div style needed to add space at top of header label  */}
          <div
            style={{
              marginTop: '10px'
            }}
          />
          <Dropdown.Header
            content={this.props.a_menu.name}
            href={this.props.a_menu.to + '#top'}
          />
          <Divider/>
          {
            <SubMenuItems
              a_menu={this.props.a_menu}
            />
          }
        </Dropdown.Menu>
      </Dropdown>
    );
  }
};

DropdownSubMenuItems.propTypes = {
  a_menu: PropTypes.object,
};

/*


 */