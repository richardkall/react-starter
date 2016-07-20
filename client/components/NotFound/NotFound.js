import React from 'react';
import Helmet from 'react-helmet';

export const NotFound = () => (
  <span>
    <Helmet title='404: Page Not Found' />
    <h1>404: Page Not Found</h1>
  </span>
);

export default NotFound;
