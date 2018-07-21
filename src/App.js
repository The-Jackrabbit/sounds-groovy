import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import StaffLogin from './pages/StaffLogin';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/login/" component={StaffLogin} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
