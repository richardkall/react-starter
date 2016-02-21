import React, {Component, PropTypes} from 'react';
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from '../../constants/TodoFilters';
import Footer from '../Footer';
import TodoItem from '../TodoItem';
import style from './MainSection.css';

const TODO_FILTERS = {
  [SHOW_ACTIVE]: (todo) => !todo.completed,
  [SHOW_ALL]: () => true,
  [SHOW_COMPLETED]: (todo) => todo.completed
};

class MainSection extends Component {
  handleClearCompleted = () => {
    this.props.actions.clearCompleted();
  }

  handleCompleteAll = () => {
    this.props.actions.completeAll();
  }

  renderToggleAll (completedCount) {
    const {todos} = this.props;
    if (!todos.length) return false;

    return (
      <input
        checked={completedCount === todos.length}
        className={style.toggleAll}
        type="checkbox"
        onChange={this.handleCompleteAll}
      />
    );
  }

  renderFooter (completedCount) {
    const {todos} = this.props;
    const activeCount = todos.length - completedCount;

    if (!todos.length) return false;

    return (
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={this.handleClearCompleted}
      />
    );
  }

  render () {
    const {actions, filter, todos} = this.props;
    const filteredTodos = todos.filter(TODO_FILTERS[filter]);

    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    );

    return (
      <section className={style.root}>
        {this.renderToggleAll(completedCount)}
        <ul className={style.list}>
          {filteredTodos.map((todo) =>
            <TodoItem
              key={todo.id}
              todo={todo}
              {...actions}
            />
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}

MainSection.propTypes = {
  actions: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  todos: PropTypes.array
};

export default MainSection;
