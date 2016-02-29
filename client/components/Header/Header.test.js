import Header from '.';
import React from 'react';

const TodoTextInput = () => {};

const setup = () => {
  const props = {
    addTodo: expect.createSpy()
  };

  const {output} = shallowRender(<Header {...props} />);

  return {
    output,
    props
  };
};

describe('Header', () => {
  it('renders correctly', () => {
    const {output} = setup();
    expect(output).toEqualJSX(
      <header>
        <h1>todos</h1>
        <TodoTextInput
          newTodo
          placeholder='What needs to be done?'
          onSave={() => {}}
        />
      </header>
    );
  });

  it('calls addTodo on input save', () => {
    const {output, props} = setup();
    const input = output.props.children[1];
    input.props.onSave('Use Redux');
    expect(props.addTodo).toHaveBeenCalledWith('Use Redux');
  });
});
