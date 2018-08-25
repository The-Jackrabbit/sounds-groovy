import React from 'react';
import {Grid} from 'semantic-ui-react';
import NavMenu from './components/NavMenu';


const Main = () => {
  return (
    <Grid doubling width='inherit'>
      <NavMenu/>
      <Grid.Row>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={14}>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Main;