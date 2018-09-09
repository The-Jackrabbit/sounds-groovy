import {Menu, Image, Responsive} from 'semantic-ui-react';
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
    <div>
      {/*  logo for mobile devices  */}
      <Responsive maxWidth={768}>
        <div
          style={{
            marginLeft: '-14px'
          }}
        >
          <Menu.Item
            key='logoimage'
            href='/'
            onClick={handleButtonClick}
          >
            <Image
              centered
              verticalAlign='middle'
              size='mini'
              src={logo}
            />
          </Menu.Item>
          <Menu.Item
            key='logotitle'
            href='/'
            header
            onClick={handleButtonClick}
            style={{
              paddingTop: '0px',
              marginLeft: '1.5em'
            }}
            content='Sounds Groovy OBX'
          />
        </div>
      </Responsive>

      {/*  logo for desktop  */}
      <Responsive minWidth={768}>
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
      </Responsive>

    </div>
  );
};


LogoHeader.propTypes = {
  sidebarVisible: PropTypes.func,
};

export default LogoHeader;

/*


 */