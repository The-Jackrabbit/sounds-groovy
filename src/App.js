import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs/AboutUs';
import Header from './pages/Header/Header';

const App = () => {
  return (
    <div>
        <Header/>
        <AboutUs/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/aboutus/" component={AboutUs} />
      </Switch>
    </div>
  );
};

export default App;
