import React, {PropTypes} from 'react';
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from '../../constants/TodoFilters';
import Footer from '../Footer';
import TodoItem from '../TodoItem';
import style from './MainSection.css';

const TODO_FILTERS = {
  [SHOW_ACTIVE]: (todo) => !todo.completed,
  [SHOW_ALL]: () => true,
  [SHOW_COMPLETED]: (todo) => todo.completed
};

const MainSection = (props) => {
  const {actions, filter, todos} = props;

  const filteredTodos = todos.filter(TODO_FILTERS[filter]);
  const completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0);
  const activeCount = todos.length - completedCount;

  const handleClearCompleted = () => actions.clearCompleted();
  const handleCompleteAll = () => actions.completeAll();

  const toggleAll = todos.length ? (
    <input
      checked={completedCount === todos.length}
      className={style.toggleAll}
      type='checkbox'
      onChange={handleCompleteAll}
    />
  ) : false;

  const footer = todos.length ? (
    <Footer
      activeCount={activeCount}
      completedCount={completedCount}
      onClearCompleted={handleClearCompleted}
    />
  ) : false;

  return (
    <section className={style.root}>
      {toggleAll}
      <ul className={style.list}>
        {filteredTodos.map((todo) =>
          <TodoItem
            key={todo.id}
            todo={todo}
            {...actions}
          />
        )}
      </ul>
      {footer}
    </section>
  );
};

MainSection.propTypes = {
  actions: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  todos: PropTypes.array
};

export default MainSection;
