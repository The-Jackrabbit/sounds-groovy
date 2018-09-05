import React from 'react';
import {Divider, Dropdown, Menu} from 'semantic-ui-react';
import PropTypes from 'prop-types';


const SubMenuItems = (props) => {
  return (
    <Menu
      style={{
        margin: '5px 0px 0px -28px',
        boxShadow: 'none',
      }}
      size='huge'
      borderless
    >

      {/* Sets first item to the menu name as a selectable */}

      <Dropdown
        item
        text={props.a_menu.name}
        header
      >
        <Dropdown.Menu
        >
          <Dropdown.Item
            href={props.a_menu.to + '#top'}
            text={props.a_menu.name}
          />
          <Divider/>
          {
            props.a_menu.subs.map(dditem => (
              <Dropdown.Item
                key={dditem}
                href={props.a_menu.to + '#' + dditem}
                text={dditem}
              />
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

SubMenuItems.propTypes = {
  a_menu: PropTypes.object.isRequired,
};

export default SubMenuItems;

/*

 */