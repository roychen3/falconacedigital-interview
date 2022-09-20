import styled from 'styled-components';

import { StyledIconBox } from '../icons';

export const StyledErrorAlert = styled.div`
  position: fixed;
  left: 1.5rem;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 1000;
  padding: 0.75rem;
  color: #fff;
  background-color: #d32f2f;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  @media (min-width: 768px) {
    left: auto;
    right: 1.5rem;
  }
`;

export const AlertLayout = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const IconBox = styled(StyledIconBox)`
  width: 1.5rem;
  color: #fff;
`;

export const ChildrenLayout = styled.div`
  flex-grow: 1;
`;
