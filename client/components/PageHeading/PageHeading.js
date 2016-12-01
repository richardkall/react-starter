import React, { PropTypes } from 'react';

import styled from 'styled-components';

const H1 = styled.h1`
  font-family: sans-serif;
  color: #222;
`;

const PageHeading = ({ text }) => (
  <H1>{text}</H1>
);

PageHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageHeading;
