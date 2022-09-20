import React from 'react';
import PropTypes from 'prop-types';

import { StyledSideBar } from './styled';

const SideBar = ({ children }) => {
  return <StyledSideBar>{children}</StyledSideBar>;
};

SideBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideBar;
