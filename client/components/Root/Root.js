import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';

const Root = ({children, store}) => (
  <Provider store={store}>
    {children}
  </Provider>
);

Root.propTypes = {
  children: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
