import {App} from '.';
import React from 'react';
import {SHOW_ALL} from '../../constants/TodoFilters';
import style from './App.css';

const Header = () => {};
const MainSection = () => {};

const setup = () => {
  const props = {
    route: {
      filter: SHOW_ALL
    },
    todos: [],
    actions: {
      addTodo: () => {}
    }
  };

  const {output} = shallow(<App {...props} />);

  return {output, props};
};

describe('App', () => {
  it('renders correctly', () => {
    const {output, props} = setup();

    expect(output).toEqualJSX(
      <div className={style.root}>
        <Header addTodo={props.actions.addTodo} />
        <MainSection
          actions={props.actions}
          filter={props.route.filter}
          todos={props.todos}
        />
      </div>
    );
  });
});
