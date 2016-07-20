import React from 'react';

import {App} from '.';
import style from './App.css';

describe('App', () => {
  it('renders correctly', () => {
    const props = {loading: false};
    const {output} = shallow(<App {...props} />);

    expect(output).toEqualJSX(
      <div className={style.root}>
        <h1>Hello World</h1>
      </div>
    );
  });

  it('renders correctly when loading=true', () => {
    const props = {loading: true};
    const {output} = shallow(<App {...props} />);

    expect(output).toEqualJSX(
      <div className={style.root}>
        <h1>Hello World</h1>
        Loading...
      </div>
    );
  });
});
