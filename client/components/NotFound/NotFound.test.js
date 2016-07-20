import React from 'react';

import NotFound from './NotFound';

const HelmetWrapper = () => {};

describe('NotFound', () => {
  it('renders correctly', () => {
    const {output} = shallow(<NotFound />);

    expect(output).toEqualJSX(
      <span>
        <HelmetWrapper title='404: Page Not Found' />
        <h1>404: Page Not Found</h1>
      </span>
    );
  });
});
