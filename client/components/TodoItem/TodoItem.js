import React, {Component, PropTypes} from 'react';
import TodoTextInput from '../TodoTextInput';
import classnames from 'classnames';
import style from './TodoItem.css';

export default class TodoItem extends Component {
  static propTypes = {
    completeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
  }

  constructor (props, context) {
    super(props, context);
    this.state = {editing: false};
  }

  handleDoubleClick = () => this.setState({editing: true});

  handleSave = (id, text) => {
    if (text.length) {
      this.props.editTodo(id, text);
    } else {
      this.props.deleteTodo(id);
    }

    this.setState({editing: false});
  }

  render () {
    const {completeTodo, deleteTodo, todo} = this.props;
    const {editing} = this.state;
    let element;

    if (editing) {
      element = (
        <TodoTextInput
          editing={editing}
          text={todo.text}
          onSave={(text) => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className={style.view}>
          <input
            checked={todo.completed}
            className={style.toggle}
            type='checkbox'
            onChange={() => completeTodo(todo.id)}
          />
          <label
            className={style.label}
            onDoubleClick={this.handleDoubleClick}
          >
            {todo.text}
          </label>
          <button
            className={style.destroy}
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      );
    }

    const classes = classnames({
      [style.completed]: todo.completed,
      [style.editing]: editing,
      [style.normal]: !todo.completed && !this.state.editing
    });

    return (
      <li className={classes}>
        {element}
      </li>
    );
  }
}
