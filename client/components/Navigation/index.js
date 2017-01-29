import React from 'react';
import { Link } from 'react-router-dom';
import { propType } from 'graphql-anywhere';

import NAVIGATION_USER from './NavigationUser.gql';

const Navigation = ({ user }) => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li>{user && user.email}</li>
    </ul>
  </nav>
);

Navigation.propTypes = {
  user: propType(NAVIGATION_USER), // eslint-disable-line react/require-default-props
};

export default Navigation;
