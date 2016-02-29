import React from 'react';
import TodoItem from '.';
import style from './TodoItem.css';

const setup = (editing: false) => {
  const props = {
    todo: {
      id: 1,
      completed: false,
      text: 'Use Redux'
    },
    completeTodo: expect.createSpy(),
    deleteTodo: expect.createSpy(),
    editTodo: expect.createSpy()
  };

  let {output, renderer} = shallowRender(<TodoItem {...props} />); // eslint-disable-line prefer-const

  if (editing) {
    const label = output.props.children.props.children[1];
    label.props.onDoubleClick();
    output = renderer.getRenderOutput();
  }

  return {
    output,
    props,
    renderer
  };
};

describe('TodoItem', () => {
  it('renders correctly', () => {
    const {output, props} = setup();
    expect(output).toEqualJSX(
      <li className={style.normal}>
        <div className={style.view}>
          <input
            checked={props.todo.completed}
            className={style.toggle}
            type='checkbox'
            onChange={() => {}}
          />
          <label
            className={style.label}
            onDoubleClick={() => {}}
          >
            {props.todo.text}
          </label>
          <button
            className={style.destroy}
            onClick={() => {}}
          />
        </div>
      </li>
    );
  });

  it('calls completeTodo on input change', () => {
    const {output, props} = setup();
    const input = output.props.children.props.children[0];
    input.props.onChange();
    expect(props.completeTodo).toHaveBeenCalledWith(props.todo.id);
  });

  it('calls deleteTodo on destroy button click', () => {
    const {output, props} = setup();
    const button = output.props.children.props.children[2];
    button.props.onClick();
    expect(props.deleteTodo).toHaveBeenCalledWith(props.todo.id);
  });

  it('sets state to editing=false on label double click', () => {
    const {output, renderer} = setup();
    const label = output.props.children.props.children[1];
    label.props.onDoubleClick();
    const updated = renderer.getRenderOutput();
    expect(updated.props.className).toEqual(style.editing);
  });

  describe('in editing state', () => {
    it('calls editTodo on input save', () => {
      const {output, props} = setup(true);
      output.props.children.props.onSave('Use Redux');
      expect(props.editTodo).toHaveBeenCalledWith(1, 'Use Redux');
    });

    it('calls deleteTodo on input save when text is empty', () => {
      const {output, props} = setup(true);
      output.props.children.props.onSave('');
      expect(props.deleteTodo).toHaveBeenCalledWith(1);
    });

    it('sets state to editing=false on input save', () => {
      const {output, renderer} = setup(true);
      output.props.children.props.onSave('Use Redux');
      const updated = renderer.getRenderOutput();
      expect(updated.props.className).toEqual(style.normal);
    });
  });
});
