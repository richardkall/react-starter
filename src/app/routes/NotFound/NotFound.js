import React, { Component, PropTypes } from 'react';

class NotFound extends Component {
  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.status = 404;
    }
  }

  render() {
    return (
      <div>
        <h1>Page not found</h1>
      </div>
    );
  }
}

NotFound.propTypes = {
  staticContext: PropTypes.shape(), // eslint-disable-line react/require-default-props
};

export default NotFound;
