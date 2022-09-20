import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { StyledIconBox } from '../icons';

export const StyledSideMenu = styled.ul`
`;

export const StyledLink = styled(Link)`
  curser: pointer;
  text-decoration: none;
  color: black;
  overflow: hidden;
  display: none;

  @media (min-width: 1024px) {
    display: initial;
  }
`;

export const ItemLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;

  ${({ $isSelected }) =>
    $isSelected
      ? `
        color: #fff;
        background-color: #3478BC;
        border-radius: 9999px;
        `
      : ''}
`;

export const IconBox = styled(StyledIconBox)`
  width: 1.5rem;
`;

export const Name = styled.p``;
