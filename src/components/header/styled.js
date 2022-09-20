import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 0.75rem 0;


  @media (min-width: 1024px) {
    background-color: #fff;
    box-shadow: 1px 1px 0 0 rgb(0 0 0 / 8%), 1px 1px 4px 0 rgb(0 0 0 / 10%);
    border-bottom: none;
    padding: 1.25rem 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 900;
  }
`;

export const HeaderLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

export const Logo = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export const LogoImage = styled.img`
  width: 7rem;
`;
