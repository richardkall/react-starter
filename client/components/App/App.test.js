import React from 'react';

import {App} from './App';
import style from './App.css';

const Link = () => {};

describe('App', () => {
  it('renders correctly', () => {
    const props = {loading: false};
    const {output} = shallow(<App {...props} />);

    expect(output).toEqualJSX(
      <div className={style.root}>
        <Link style={{}} to='/'>Home</Link>
      </div>
    );
  });

  it('renders correctly when loading=true', () => {
    const props = {loading: true};
    const {output} = shallow(<App {...props} />);

    expect(output).toEqualJSX(
      <div className={style.root}>
        <Link style={{}} to='/'>Home</Link>
        Loading...
      </div>
    );
  });
});
