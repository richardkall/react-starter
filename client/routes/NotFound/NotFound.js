import Helmet from 'react-helmet';
import React from 'react';

import PageHeading from '../../components/PageHeading';

const NotFound = () => (
  <div>
    <Helmet title='404: Page Not Found' />
    <PageHeading text='404: Page Not Found' />
  </div>
);

export default NotFound;
