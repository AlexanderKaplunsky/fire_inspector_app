import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ObjectReview from '../Pages/ObjectReview/ObjectReview';

const NavbarRouter = () => {
  return (
    <Switch>
      <Route path="/object-review">{<ObjectReview />}</Route>
      <Route path="/personal">{/*<Users />*/}</Route>
      <Route path="/fire_shield">{/*<Home />*/}</Route>
      <Route path="/extinguishers">{/*<Home />*/}</Route>
      <Route path="/documents">{/*<Home />*/}</Route>
      <Route path="/automatic_extinguishing">{/*<Home />*/}</Route>
      <Route path="/incidents">{/*<Home />*/}</Route>
    </Switch>
  );
};

export default NavbarRouter;
