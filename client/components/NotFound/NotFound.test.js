import React from 'react';

import NotFound from '.';

describe('NotFound', () => {
  it('renders correctly', () => {
    const {output} = shallow(<NotFound />);

    expect(output).toEqualJSX(
      <h2>404: Page Not Found</h2>
    );
  });
});
