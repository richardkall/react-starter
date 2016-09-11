import Helmet from 'react-helmet';
import React from 'react';

import PageHeading from '../../components/PageHeading';

const Home = () => (
  <div>
    <Helmet title='Home' />
    <PageHeading text='Welcome' />
  </div>
);

export default Home;
