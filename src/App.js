import React from 'react';
import Routes from './router';
import NavMenu from './components/NavMenu';
import {Grid} from 'semantic-ui-react';

const App = () => {
  return (
    <div id="top">
      <Grid celled padded style={{height: '100vh'}}>
        <Grid.Row style={{height: '9%', backgroundColor: 'yellow'}}>
          <NavMenu/>
        </Grid.Row>
        <Grid.Row style={{height: '91%', backgroundColor: 'purple'}}>
          <Routes/>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default App;

// paddingTop: '65px',