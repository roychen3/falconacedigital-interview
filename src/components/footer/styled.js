import styled from 'styled-components';

export const StyledFooter = styled.footer`
  box-shadow: 1px -1px 0 0 rgb(0 0 0 / 8%), 1px -1px 4px 0 rgb(0 0 0 / 10%);

  @media (min-width: 1024px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
  }
`;

export const FooterLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;

  @media (min-width: 1024px) {
    justify-content: start;
  }
`;

export const ItemLink = styled.a`
  color: gray;
  margin: 1rem 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Author = styled.p`
  color: gray;
  margin: 1rem 0;
  white-space: nowrap;
  text-align: center;
`;
