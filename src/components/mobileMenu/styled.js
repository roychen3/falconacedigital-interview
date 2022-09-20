import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMobileMenu = styled.div`
  background-color: #fff;
  box-shadow: 1px 1px 0 0 rgb(0 0 0 / 8%);
  border-bottom: none;
  padding: 0.5rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 900;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  font-size: 0.875rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  padding: 0.25rem 0.5rem;
  curser: pointer;
  text-decoration: none;
  color: black;
  overflow: hidden;
  font-weight: 700;

  ${({ $isSelected }) =>
    $isSelected
      ? `
      color: #3478BC;
      `
      : ''}

  @media (min-width: 1024px) {
    padding: 0.5rem 0.5rem;
  }
`;

export const Name = styled.p``;
