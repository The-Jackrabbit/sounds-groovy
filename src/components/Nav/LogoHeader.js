import {Menu, Image} from 'semantic-ui-react';
import logo from '../../resources/logo.svg';
import React from 'react';
import PropTypes from 'prop-types';


const LogoHeader = (props) => {
  /*  SGOBX brand - logo and name  */
  const handleButtonClick = () => {
    console.log('handling button click');
    props.sidebarVisible();
  };

  return (
    <Menu.Item
      key='logo'
      href='/'
      header
      onClick={handleButtonClick}
    >
      <Image
        centered
        verticalAlign='middle'
        size='mini'
        src={logo}
        style={{
          marginRight: '1.5em'
        }}
      />
      Sounds Groovy OBX
    </Menu.Item>
  );
};


LogoHeader.propTypes = {
  sidebarVisible: PropTypes.func,
};

export default LogoHeader;

/*

 */