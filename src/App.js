import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs/AboutUs';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/aboutus/" component={AboutUs} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
