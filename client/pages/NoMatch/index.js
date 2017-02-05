import React, { Component, PropTypes } from 'react';

import H1 from '../../components/H1';

class NoMatch extends Component {
  componentWillMount() {
    if (this.context.router.staticContext) {
      this.context.router.staticContext.status = 404;
    }
  }

  render() {
    return (
      <div>
        <H1>Page not found</H1>
      </div>
    );
  }
}

NoMatch.contextTypes = {
  router: PropTypes.shape({
    staticContext: PropTypes.shape(),
  }).isRequired,
};

export default NoMatch;
