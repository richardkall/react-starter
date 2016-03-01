import React from 'react';
import TodoTextInput from '.';
import style from './TodoTextInput.css';

const setup = (overrides) => {
  const props = Object.assign({
    placeholder: 'What needs to be done?',
    onSave: expect.createSpy()
  }, overrides);

  const {output, renderer} = shallowRender(<TodoTextInput {...props} />);

  return {output, props, renderer};
};

describe('TodoTextInput', () => {
  it('renders correctly', () => {
    const {output} = setup();

    expect(output).toEqualJSX(
      <input
        autoFocus='true'
        className={style.normal}
        placeholder='What needs to be done?'
        type='text'
        value=''
        onBlur={() => {}}
        onChange={() => {}}
        onKeyDown={() => {}}
      />
    );
  });

  it('renders correctly when editing=true', () => {
    const {output} = setup({editing: true});
    expect(output.props.className).toEqual(style.edit);
  });

  it('updates value on change', () => {
    const {output, renderer} = setup();

    output.props.onChange({
      target: {
        value: 'Use Redux'
      }
    });

    const updated = renderer.getRenderOutput();

    expect(updated.props.value).toEqual('Use Redux');
  });

  it('calls onSave on return key press', () => {
    const {output, props} = setup();

    output.props.onKeyDown({
      which: 13,
      target: {
        value: 'Use Redux'
      }
    });

    expect(props.onSave).toHaveBeenCalledWith('Use Redux');
  });

  it('resets value on return key press', () => {
    const {output, renderer} = setup();

    output.props.onKeyDown({
      which: 13,
      target: {
        value: 'Use Redux'
      }
    });

    const updated = renderer.getRenderOutput();

    expect(updated.props.value).toEqual('');
  });

  it('calls onSave on blur', () => {
    const {output, props} = setup();

    output.props.onBlur({target: {value: 'Use Redux'}});

    expect(props.onSave).toHaveBeenCalledWith('Use Redux');
  });

  it('does not call onSave on blur if newTodo', () => {
    const {output, props} = setup({newTodo: true});

    output.props.onBlur({target: {value: 'Use Redux'}});

    expect(props.onSave.calls.length).toEqual(0);
  });
});
