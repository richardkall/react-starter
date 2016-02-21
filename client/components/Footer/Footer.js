import React, {Component, PropTypes} from 'react';
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from '../../constants/TodoFilters';
import {Link} from 'react-router';
import style from './Footer.css';

const FILTER_TITLES = {
  [SHOW_ACTIVE]: 'Active',
  [SHOW_ALL]: 'All',
  [SHOW_COMPLETED]: 'Completed'
};

class Footer extends Component {
  renderFilterLink (filter) {
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
  }

  renderClearButton () {
    const {completedCount, onClearCompleted} = this.props;
    if (!completedCount) return false;

    return (
      <button
        className={style.clearCompleted}
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    );
  }

  renderTodoCount () {
    const {activeCount} = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className={style.count}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  render () {
    return (
      <footer className={style.root}>
        {this.renderTodoCount()}
        <ul className={style.filters}>
          {[SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED].map((filter) =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}

Footer.propTypes = {
  activeCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired
};

export default Footer;
