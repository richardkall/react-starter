import React, {PropTypes} from 'react';
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from '../../constants/TodoFilters';
import {Link} from 'react-router';
import style from './Footer.css';

const FILTER_TITLES = {
  [SHOW_ACTIVE]: 'Active',
  [SHOW_ALL]: 'All',
  [SHOW_COMPLETED]: 'Completed'
};

const Footer = (props) => {
  const {activeCount, completedCount, onClearCompleted} = props;
  const itemWord = activeCount === 1 ? 'item' : 'items';

  const clearButton = completedCount ? (
    <button
      className={style.clearCompleted}
      onClick={onClearCompleted}
    >
      Clear completed
    </button>
  ) : false;

  const filterLink = (filter) => { // eslint-disable-line react/no-multi-comp
    const title = FILTER_TITLES[filter];
    const uri = title === 'All' ? '/' : `/${title.toLowerCase()}`;

    return (
      <Link
        activeClassName={style.selectedFilter}
        className={style.filter}
        to={uri}
      >
        {title}
      </Link>
    );
  };

  return (
    <footer className={style.root}>
      <span className={style.count}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
      <ul className={style.filters}>
        {[SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED].map((filter) =>
          <li key={filter}>
            {filterLink(filter)}
          </li>
        )}
      </ul>
      {clearButton}
    </footer>
  );
};

Footer.propTypes = {
  activeCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired
};

export default Footer;
