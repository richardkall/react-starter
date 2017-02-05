import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import About from '../../pages/About';
import NoMatch from '../../pages/NoMatch';
import Navigation from '../Navigation';

import './global-styles';

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
