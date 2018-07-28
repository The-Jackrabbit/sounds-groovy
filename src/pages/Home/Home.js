import React from 'react';
import FullscreenView from '../../components/fullscreen-view/FullscreenView';
import './Home.css';

const Home = () => {
  return (
    <div style={{
      paddingTop: '58px',
    }}>
      <FullscreenView topText="Houston"></FullscreenView>
      <div className="fullscreen-view g image-only"></div>
    </div>
  );
};

const page = {
  fullscreenViews: [
    {
      sideBar: {
        topText: '',
        bigText: '',
        button: ''
      },
      imageHalf: {
        image: '' // imageurl
      }
    },
    {
      onlyImage: true,
      image: {
        image: '', // imageurl,
        topText: '',
        bigText: '',
        button: ''
      }
    },
    {
      sideBar: {
        topText: '',
        bigText: '',
        button: ''
      },
      imageHalf: {
        image: '' // imageurl
      }
    },
    {
      sideBar: {
        topText: '',
        bigText: '',
        button: ''
      },
      imageHalf: {
        image: '' // imageurl
      }
    },
  ]
};

export default Home;
