import {Grid, Header, Segment} from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

const HomePageButton = (props) => [
  <Grid.Column
    key='HomePageButton'
    verticalAlign='middle'
    width={props.cols}
    centered={'true'}
    style={{padding: '40px auto 40px auto'}}
  >
    <p
      style={{
        marginTop: '11px'
      }}
    >
      {props.description}
    </p>
    <Segment
      padded
      raised
      circular
      textAlign='center'
      style={{
        width: '40%'
      }}
    >
      <Header
        size='tiny'
      >
        {props.header}
      </Header>
    </Segment>
  </Grid.Column>
];


HomePageButton.propTypes = {
  header: PropTypes.string.isRequired,
  cols: PropTypes.number.isRequired,
};

export default HomePageButton;

/*

 */