import React from 'react';

import NotFound from './NotFound';

describe('NotFound', () => {
  it('renders correctly', () => {
    const {output} = shallow(<NotFound />);

    expect(output).toEqualJSX(
      <h1>404: Page Not Found</h1>
    );
  });
});
