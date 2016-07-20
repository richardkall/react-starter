import React from 'react';

import Home from './Home';

describe('Home', () => {
  it('renders correctly', () => {
    const {output} = shallow(<Home />);

    expect(output).toEqualJSX(
      <h1>Welcome</h1>
    );
  });
});
