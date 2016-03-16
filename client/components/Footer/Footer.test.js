import Footer from '.';
import React from 'react';
import {SHOW_ALL} from '../../constants/TodoFilters';
import style from './Footer.css';

const Link = () => {};

const setup = (overrides) => {
  const props = Object.assign({
    activeCount: 0,
    completedCount: 0,
    filter: SHOW_ALL,
    onClearCompleted: expect.createSpy()
  }, overrides);

  const {output} = shallow(<Footer {...props} />);

  return {output, props};
};

describe('Footer', () => {
  it('renders correctly', () => {
    const {output} = setup();

    expect(output).toEqualJSX(
      <footer className={style.root}>
        <span className={style.count}>
          <strong>No</strong> items left
        </span>
        <ul className={style.filters}>
          <li>
            <Link
              activeClassName={style.selectedFilter}
              className={style.filter}
              onlyActiveOnIndex={false}
              style={{}}
              to='/active'
            >
              Active
            </Link>
          </li>
          <li>
            <Link
              activeClassName={style.selectedFilter}
              className={style.filter}
              onlyActiveOnIndex={false}
              style={{}}
              to='/'
            >
              All
            </Link>
          </li>
          <li>
            <Link
              activeClassName={style.selectedFilter}
              className={style.filter}
              onlyActiveOnIndex={false}
              style={{}}
              to='/completed'
            >
              Completed
            </Link>
          </li>
        </ul>
      </footer>
    );
  });

  it('renders correctly when activeCount > 0', () => {
    const {output} = setup({activeCount: 3});

    expect(output).toEqualJSX(
      <footer className={style.root}>
        <span className={style.count}>
          <strong>3</strong> items left
        </span>
        <ul className={style.filters}>
          <li>
            <Link
              activeClassName={style.selectedFilter}
              className={style.filter}
              onlyActiveOnIndex={false}
              style={{}}
              to='/active'
            >
              Active
            </Link>
          </li>
          <li>
            <Link
              activeClassName={style.selectedFilter}
              className={style.filter}
              onlyActiveOnIndex={false}
              style={{}}
              to='/'
            >
              All
            </Link>
          </li>
          <li>
            <Link
              activeClassName={style.selectedFilter}
              className={style.filter}
              onlyActiveOnIndex={false}
              style={{}}
              to='/completed'
            >
              Completed
            </Link>
          </li>
        </ul>
      </footer>
    );
  });

  it('renders correctly when completedCount > 0', () => {
    const {output} = setup({completedCount: 1});

    expect(output).toEqualJSX(
      <footer className={style.root}>
        <span className={style.count}>
          <strong>No</strong> items left
        </span>
        <ul className={style.filters}>
          <li>
            <Link
              activeClassName={style.selectedFilter}
              className={style.filter}
              onlyActiveOnIndex={false}
              style={{}}
              to='/active'
            >
              Active
            </Link>
          </li>
          <li>
            <Link
              activeClassName={style.selectedFilter}
              className={style.filter}
              onlyActiveOnIndex={false}
              style={{}}
              to='/'
            >
              All
            </Link>
          </li>
          <li>
            <Link
              activeClassName={style.selectedFilter}
              className={style.filter}
              onlyActiveOnIndex={false}
              style={{}}
              to='/completed'
            >
              Completed
            </Link>
          </li>
        </ul>
        <button
          className={style.clearCompleted}
          onClick={() => {}}
        >
          Clear completed
        </button>
      </footer>
    );
  });

  it('calls onClearCompleted on clear button click', () => {
    const {output, props} = setup({completedCount: 1});
    const clearButton = output.props.children[2];

    clearButton.props.onClick();

    expect(props.onClearCompleted).toHaveBeenCalled();
  });
});
