import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';

import style from './Navigation.css';

function Navigation({ user }) {
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink
            className={style.link}
            activeClassName={style.activeLink}
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            className={style.link}
            activeClassName={style.activeLink}
            to="/about"
            exact
          >
            About
          </NavLink>
        </li>
        {user && <li className={style.item}>{user.email}</li>}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }),
};

export default Navigation;
