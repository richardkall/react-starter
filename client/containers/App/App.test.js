import {App} from '.';
import React from 'react';
import style from './App.css';

describe('App', () => {
  it('renders a div', () => {
    const result = shallowRender(<App />);
    expect(result.type).toEqual('div');
  });

  it('renders the correct className', () => {
    const result = shallowRender(<App />);
    expect(result.props.className).toEqual(style.root);
  });

  it('renders an h1', () => {
    const result = shallowRender(<App />);
    expect(result.props.children.type).toEqual('h1');
  });
});
