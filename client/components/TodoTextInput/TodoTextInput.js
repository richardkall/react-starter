import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import style from './TodoTextInput.css';

const ENTER_KEY = 13;

class TodoTextInput extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleBlur = (e) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  handleChange = (e) => {
    this.setState({text: e.target.value});
  }

  handleKeyDown = (e) => {
    const text = e.target.value.trim();
    if (e.which !== ENTER_KEY || text.length === 0) return;
    this.props.onSave(text);
    this.setState({text: ''});
  }

  render () {
    const classes = classnames({
      [style.normal]: !this.props.editing,
      [style.edit]: this.props.editing
    });

    return (
      <input
        autoFocus='true'
        className={classes}
        placeholder={this.props.placeholder}
        type='text'
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

TodoTextInput.propTypes = {
  editing: PropTypes.bool,
  newTodo: PropTypes.bool,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  onSave: PropTypes.func.isRequired
};

export default TodoTextInput;
