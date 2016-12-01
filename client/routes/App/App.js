import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';

import Navigation from '../../components/Navigation';
import config from '../../../config';

const App = ({ children }) => (
  <div>
    <Helmet titleTemplate={`%s - ${config.meta.title}`} />
    <Navigation />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
