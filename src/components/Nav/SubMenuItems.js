import React, { Component } from 'react';
import {Accordion, Menu} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const MenuItemList = (props) => {
  const handleButtonClick = () => this.state.sidebarVisible();
  return (
    <div>
      {
        props.a_menu.subs.map(dditem => (
          <Menu.Item
            key={dditem}
            href={props.a_menu.to + '#' + dditem}
            content={dditem}
            onClick={this.handleButtonClick}
          />
        ))
      }
    </div>
  );
};

MenuItemList.propTypes = {
  a_menu: PropTypes.object.isRequired,
  sidebarVisible: PropTypes.func.isRequired,
};

export default class SubMenuItems extends Component {
  handleButtonClick = () => this.state.sidebarVisible();
  state = {activeIndex: 1};

  handleClick = (e, titleProps) => {
    const {index} = titleProps;
    const {activeIndex} = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({activeIndex: newIndex});

    // this.setState({ visible: !this.state.visible});
  };

  render() {
    const {activeIndex} = this.state;

    return (

      <Accordion
        as={Menu}
        vertical
        // size='huge'
        // borderless
        style={{
          textAlign: 'left'
        }}
      >

        <Accordion.Title
          active={activeIndex === 0}
          content={this.props.a_menu.name}
          index={0}
          onClick={this.handleClick}
        />
        <Accordion.Content
          active={activeIndex === 0}
          content={
            <MenuItemList
              a_menu={this.props.a_menu}
              sidebarVisible={this.handleClick}
            />
          }
        />

      </Accordion>
    );
  }
};

SubMenuItems.propTypes = {
  a_menu: PropTypes.object,
  sidebarVisible: PropTypes.func.isRequired,
};

/*
        <Dropdown
          item
          text={this.props.a_menu.name}
          header
        >
          <Dropdown.Menu
          >
            <Dropdown.Item
              href={this.props.a_menu.to + '#top'}
              text={this.props.a_menu.name}
            />
            <Divider/>
            {
              this.props.a_menu.subs.map(dditem => (
                <Dropdown.Item
                  key={dditem}
                  href={this.props.a_menu.to + '#' + dditem}
                  text={dditem}
                />
              ))
            }
          </Dropdown.Menu>
        </Dropdown>
 */