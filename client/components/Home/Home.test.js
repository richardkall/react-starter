import React from 'react';

import Home from './Home';

const HelmetWrapper = () => {};

describe('Home', () => {
  it('renders correctly', () => {
    const {output} = shallow(<Home />);

    expect(output).toEqualJSX(
      <span>
        <HelmetWrapper title='Home' />
        <h1>Welcome</h1>
      </span>
    );
  });
});
