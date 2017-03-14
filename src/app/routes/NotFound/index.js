import React, { Component, PropTypes } from 'react';

import H1 from '../../components/H1';

class NotFound extends Component {
  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.status = 404;
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

NotFound.propTypes = {
  staticContext: PropTypes.shape(), // eslint-disable-line react/require-default-props
};

export default NotFound;
