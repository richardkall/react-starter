import MainSection from '.';
import React from 'react';
import {SHOW_ALL} from '../../constants/TodoFilters';
import style from './MainSection.css';

const Footer = () => {};
const TodoItem = () => {};

const setup = (overrides) => {
  const props = Object.assign({
    filter: SHOW_ALL,
    actions: {
      completeAll: expect.createSpy(),
      completeTodo: () => {},
      deleteTodo: () => {},
      editTodo: () => {}
    },
    todos: [
      {
        id: 1,
        completed: false,
        text: 'Use Redux'
      },
      {
        id: 2,
        completed: false,
        text: 'Write tests'
      }
    ]
  }, overrides);

  const {output} = shallow(<MainSection {...props} />);

  return {output, props};
};

describe('MainSection', () => {
  it('renders correctly', () => {
    const {output, props} = setup();

    expect(output).toEqualJSX(
      <section className={style.root}>
        <input
          checked={false}
          className={style.toggleAll}
          type='checkbox'
          onChange={() => {}}
        />
        <ul className={style.list}>
          <TodoItem
            todo={props.todos[0]}
            {...props.actions}
          />
          <TodoItem
            todo={props.todos[1]}
            {...props.actions}
          />
        </ul>
        <Footer
          activeCount={props.todos.length}
          completedCount={0}
          onClearCompleted={() => {}}
        />
      </section>
    );
  });

  it('renders correctly when all todos are completed', () => {
    const {output, props} = setup({
      todos: [{
        id: 0,
        completed: true,
        text: 'Use Redux'
      }]
    });

    expect(output).toEqualJSX(
      <section className={style.root}>
        <input
          checked
          className={style.toggleAll}
          type='checkbox'
          onChange={() => {}}
        />
        <ul className={style.list}>
          <TodoItem
            completeAll={() => {}}
            todo={props.todos[0]}
            {...props.actions}
          />
        </ul>
        <Footer
          activeCount={0}
          completedCount={1}
          onClearCompleted={() => {}}
        />
      </section>
    );
  });

  it('calls completeAll on toggle change', () => {
    const {output, props} = setup();
    const [toggle] = output.props.children;

    toggle.props.onChange();

    expect(props.actions.completeAll).toHaveBeenCalled();
  });
});
