import React, {PropTypes} from 'react';

const PageHeading = ({text}) => (
  <h1>{text}</h1>
);

PageHeading.propTypes = {
  text: PropTypes.string.isRequired
};

export default PageHeading;
