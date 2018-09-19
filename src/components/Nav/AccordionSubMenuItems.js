import React, { Component } from 'react';
import {Accordion, Menu} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SubMenuItems from './SubMenuItems';

// works with both sidebar and topbar menu to present the submenu items

export default class AccordionSubMenuItems extends Component {
  handleButtonClick = () => this.state.sidebarVisible();
  state = {activeIndex: 1};

  handleClick = (e, titleProps) => {
    const {index} = titleProps;
    const {activeIndex} = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({activeIndex: newIndex});
  };

  render() {
    const {activeIndex} = this.state;

    return (

      <Accordion
        as={Menu}
        vertical
        // size='mini'
        // borderless
        position='left'
        style={{
          textAlign: 'left',
          boxShadow: 'none',
          // padding: '10px'
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
            <SubMenuItems
              a_menu={this.props.a_menu}
              sidebarVisible={this.handleClick}
            />
          }
        />

      </Accordion>
    );
  }
};

AccordionSubMenuItems.propTypes = {
  a_menu: PropTypes.object,
  sidebarVisible: PropTypes.func,
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