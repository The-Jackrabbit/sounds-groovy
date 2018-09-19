import React from 'react';
import {Menu} from 'semantic-ui-react';
import PropTypes from 'prop-types';

// works with both sidebar and topbar menu to present the submenu items

const SubMenuItems = (props) => {
  return (
    <div
    >
      {
        props.a_menu.subs.map(dditem => (
          <Menu.Item
            key={dditem}
            href={props.a_menu.to + '#' + dditem}
            content={dditem}
            className='item'
            style={{
              textAlign: 'left',
            }}
          />
        ))
      }
    </div>
  );
};

SubMenuItems.propTypes = {
  a_menu: PropTypes.object.isRequired,
  sidebarVisible: PropTypes.func
};


export default SubMenuItems;

/*
 */