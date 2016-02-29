import React, {Component, PropTypes} from 'react';
import TodoTextInput from '../TodoTextInput';

class Header extends Component {
  handleSave = (text) => {
    this.props.addTodo(text);
  }

  render () {
    return (
      <header>
        <h1>todos</h1>
        <TodoTextInput
          newTodo
          placeholder='What needs to be done?'
          onSave={this.handleSave}
        />
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
