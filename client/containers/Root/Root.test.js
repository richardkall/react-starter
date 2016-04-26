import React from 'react';
import {Root} from '.';
import style from './Root.css';

describe('Root', () => {
  it('renders correctly', () => {
    const props = {loading: false};
    const {output} = shallow(<Root {...props} />);

    expect(output).toEqualJSX(
      <div className={style.root}>
        <h1>Hello World</h1>
      </div>
    );
  });

  it('renders correctly when loading=true', () => {
    const props = {loading: true};
    const {output} = shallow(<Root {...props} />);

    expect(output).toEqualJSX(
      <div className={style.root}>
        <h1>Hello World</h1>
        Loading...
      </div>
    );
  });
});
