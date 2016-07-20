import React from 'react';

import Root from '.';
import routes from '../../routes';

const Provider = () => {};

describe('Root', () => {
  it('renders correctly', () => {
    const props = {
      store: {
        dispatch: () => {},
        getState: () => {},
        subscribe: () => {}
      }
    };

    const {output} = shallow(<Root {...props} />);

    expect(output).toEqualJSX(
      <Provider {...props}>
        {routes}
      </Provider>
    );
  });
});
