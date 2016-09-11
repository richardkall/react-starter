import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';

import Navigation from '../../components/Navigation';
import config from '../../../config';

import style from './App.css';

const App = ({children}) => (
  <div className={style.root}>
    <Helmet titleTemplate={`%s - ${config.meta.title}`} />
    <Navigation />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object
};

export default App;
