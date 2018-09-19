import {cards} from './Data';
import React from 'react';
import {Grid} from 'semantic-ui-react';
import AnyPage from './AnyPage';

const HomePage = () => {
  return (
    <div
      align='center'
      style={{
        // padding: '5px 10px 10px 5px',
        topMargin: '60px'
      }}
    >
      {cards.map((c, index) => {
        return (
          <Grid
            key={'HomePageGrid' + index}
            href={c.href}
          >
            <AnyPage
              {...c}
            />
          </Grid>
        );
      })}
    </div>
  );
};

export default HomePage;

/*


 */