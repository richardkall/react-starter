import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import style from './TodoTextInput.css';

export default class TodoTextInput extends Component {
  static propTypes = {
    editing: PropTypes.bool,
    newTodo: PropTypes.bool,
    placeholder: PropTypes.string,
    text: PropTypes.string,
    onSave: PropTypes.func.isRequired
  }

  constructor (props, context) {
    super(props, context);
    this.state = {text: this.props.text || ''};
  }

  handleBlur = (e) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  handleChange = (e) => this.setState({text: e.target.value});

  handleKeyDown = (e) => {
    const ENTER_KEY = 13;
    const text = e.target.value.trim();

    if (e.which !== ENTER_KEY || !text.length) return;

    this.props.onSave(text);
    this.setState({text: ''});
  }

  render () {
    const {editing, placeholder} = this.props;

    const classes = classnames({
      [style.normal]: !editing,
      [style.edit]: editing
    });

    return (
      <input
        autoFocus='true'
        className={classes}
        placeholder={placeholder}
        type='text'
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}
