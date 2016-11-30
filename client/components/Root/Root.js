import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import routes from '../../routes';

const Root = ({ store }) => (
  <Provider store={store}>
    {routes}
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape().isRequired,
};

export default Root;
