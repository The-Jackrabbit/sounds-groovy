import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Amenities from '../pages/amenities/Amenities';
import Blog from '../pages/blog/Blog';
import ContactUs from '../pages/contact-us/ContactUs';
import Guide from '../pages/guide/Guide';
import HomePage from '../pages/homepage/HomePage';
import Rules from '../pages/rules/Rules';
import Location from '../pages/location/Location';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/amenities/" component={Amenities}/>
    <Route exact path="/blog/" component={Blog}/>
    <Route exact path="/contactus/" component={ContactUs}/>
    <Route exact path="/guide/" component={Guide}/>
    <Route exact path="/rules/" component={Rules}/>
    <Route exact path="/location/" component={Location}/>
    <Route exact path='/airbnb' name='/AirBnB' component={() => window.location = 'https://www.airbnb.com/rooms/26077543'}/>
  </Switch>
);

export default Routes;