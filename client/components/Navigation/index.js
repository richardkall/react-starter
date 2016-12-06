import React from 'react';
import Link from 'react-router/Link';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

export default Navigation;
