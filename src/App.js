import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Guide from './pages/Guide';
// import StaffLogin from './pages/StaffLogin';
import PageNotFound from './pages/PageNotFound';

// Components
import Header from './components/header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/aboutus/" component={AboutUs} />
        <Route exact path="/guide/" component={Guide} />
        <Route exact path="/contactus/" component={ContactUs} />
        {/* <Route exact path="/login/" component={StaffLogin} /> */}
        <Route path="/" component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
