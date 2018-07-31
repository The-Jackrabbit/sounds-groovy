import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Routes from './router';

const App = () => {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};

export default App;
