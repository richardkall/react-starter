import React, {PropTypes} from 'react';
import TodoTextInput from '../TodoTextInput';

const Header = (props) => {
  const handleSave = (text) => props.addTodo(text);

  return (
    <header>
      <h1>todos</h1>
      <TodoTextInput
        newTodo
        placeholder='What needs to be done?'
        onSave={handleSave}
      />
    </header>
  );
};

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
