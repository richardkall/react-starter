import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import config from '../../../config';

import style from './App.css';

export const App = ({children}) => (
  <div className={style.root}>
    <Helmet titleTemplate={`%s - ${config.meta.title}`} />
    <Link to='/'>Home</Link>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object
};

export default App;
