import React, { PropTypes } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../routes/Home';
import About from '../../routes/About';
import NotFound from '../../routes/NotFound';
import Navigation from '../Navigation';

import style from './App.css';

function App({ user }) {
  return (
    <div className={style.root}>
      <Navigation user={user} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default App;
