import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from '../pages/home/Home';
import AboutUs from '../pages/about-us/AboutUs';
import ContactUs from '../pages/contact-us/ContactUs';
import Guide from '../pages/guide/Guide';
import Amenities from '../pages/amenities/Amenities';
import PageNotFound from '../pages/page-not-found/PageNotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/aboutus/" component={AboutUs} />
    <Route exact path="/amenities/" component={Amenities} />
    <Route exact path="/guide/" component={Guide} />
    <Route exact path="/contactus/" component={ContactUs} />
    <Route path="/" component={PageNotFound} />
  </Switch>
);

export default Routes;
