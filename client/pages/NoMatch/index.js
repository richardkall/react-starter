import React, { Component, PropTypes } from 'react';

import H1 from '../../components/H1';

class NoMatch extends Component {
  componentWillMount() {
    if (this.props.history.staticContext) {
      this.props.history.staticContext.status = 404;
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

NoMatch.propTypes = {
  history: PropTypes.shape({
    staticContext: PropTypes.shape(),
  }).isRequired,
};

export default NoMatch;
