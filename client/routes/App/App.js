import React, { PropTypes } from 'react';

import Navigation from '../../components/Navigation';

const App = ({ children }) => (
  <div>
    <Navigation />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
