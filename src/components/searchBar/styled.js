import styled from 'styled-components';

import { StyledIconBox } from '../icons';

export const StyledSearchBar = styled.div`
  box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 4px 1px rgb(0 0 0 / 9%);
  border-radius: 9999px;
  border-left: 1px solid transparent;
  border-right: none;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  overflow: hidden;
  padding: 0 1.25rem;
  width: 100%;
  max-width: 650px;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const SearchBarLayout = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 0.75rem 0;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const IconBox = styled(StyledIconBox)`
  width: 1.5rem;
`;
