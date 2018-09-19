import {Grid, Responsive} from 'semantic-ui-react';
import React from 'react';
import HomePageButton from './HomePageButton';
import HomePageImage from './HomePageImage';


const ImageLeft = (props) => {
  return(
    <Grid.Row>
      <HomePageImage key='hpimg' {...props} cols={13}/>
      <HomePageButton key='hpbtn' {...props} cols={3}/>
    </Grid.Row>
  );
};

const ImageRight = (props) => {
  return(
    <Grid.Row>
      <HomePageButton key='hpbtn' {...props} cols={3}/>
      <HomePageImage key='hpimg' {...props} cols={13}/>
    </Grid.Row>
  );
};

const ImageMiddle = (props) => {
  return(
    <Grid.Row columns={16}>
      <HomePageImage key='hpimg' {...props} cols={16}/>
      <HomePageButton key='hpbtn' {...props} cols={16}/>
    </Grid.Row>
  );
};

const AnyPage = (props) => {
  const floatModeLeft = props.float === 'left';
  return [
    <Responsive
      key='AnyPageMobile'
      maxWidth={768}>
      <Grid
        columns={1}
        padded
        borderless={'true'}
        centered
        style={{
          padding: '10px',
          margin: '5px'
        }}
      >
        <ImageMiddle {...props}/>
      </Grid>
    </Responsive>,

    <Responsive
      key='AnyPageDesktop'
      minWidth={768}
      style={{
        margin: '11px',
      }}
    >
      <Grid
        padded
        borderless={'true'}
      >
        {
          (floatModeLeft)
            ? <ImageLeft {...props}/>
            : <ImageRight {...props}/>
        }
      </Grid>
    </Responsive>
  ];
};


export default AnyPage;

/*


 */