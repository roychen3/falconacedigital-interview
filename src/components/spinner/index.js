import React from 'react';
import PropTypes from 'prop-types';

import { StyledSpinner } from './styled';

const Spinner = ({ size }) => {
  return (
    <StyledSpinner size={size}>
      <div />
      <div />
      <div />
      <div />
    </StyledSpinner>
  );
};

Spinner.defaultProps = {
  size: 60,
};
Spinner.propTypes = {
  size: PropTypes.number,
};

export default Spinner;
