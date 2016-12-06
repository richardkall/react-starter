import React from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';

import Home from '../../pages/Home';
import About from '../../pages/About';
import NoMatch from '../../pages/NoMatch';
import Navigation from '../Navigation';

import './global-styles';

const App = () => (
  <div>
    <Navigation />
    <Match exactly pattern="/" component={Home} />
    <Match pattern="/about" component={About} />
    <Miss component={NoMatch} />
  </div>
);

export default App;
