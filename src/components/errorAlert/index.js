import React from 'react';
import PropTypes from 'prop-types';

import { ExclamationCircleIcon, XMarkIcon } from '../icons';

import {
  StyledErrorAlert,
  AlertLayout,
  IconBox,
  ChildrenLayout,
} from './styled';

const ErrorAlert = ({ open, onClose, children }) => (
  <>
    {open && (
      <StyledErrorAlert>
        <AlertLayout>
          <IconBox>
            <ExclamationCircleIcon />
          </IconBox>

          <ChildrenLayout>{children}</ChildrenLayout>

          <button type="button" onClick={onClose}>
            <IconBox>
              <XMarkIcon />
            </IconBox>
          </button>
        </AlertLayout>
      </StyledErrorAlert>
    )}
  </>
);

ErrorAlert.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ErrorAlert;
