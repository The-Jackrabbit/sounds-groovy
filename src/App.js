import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Routes from './router';

const App = () => {
  return (
    <div id="top">
      <Header />
      <div className="page-container">
        <Routes />
      </div>
    </div>
  );
};

export default App;
