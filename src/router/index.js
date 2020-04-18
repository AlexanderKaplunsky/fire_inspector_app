import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  ObjectReview,
  Personal,
  Incidents,
  FireShield,
  Extinguishers,
  Documents,
  AutomaticExtinguishers,
} from '../Pages';

const NavbarRouter = () => {
  return (
    <Switch>
      <Route path="/object-review">
        <ObjectReview />
      </Route>
      <Route path="/personal">
        <Personal />
      </Route>
      <Route path="/incidents">
        <Incidents />
      </Route>
      <Route path="/fire_shield">
        <FireShield />
      </Route>
      <Route path="/extinguishers">
        <Extinguishers />
      </Route>
      <Route path="/documents">
        <Documents />
      </Route>
      <Route path="/automatic_extinguishing">
        <AutomaticExtinguishers />
      </Route>
    </Switch>
  );
};

export default NavbarRouter;
