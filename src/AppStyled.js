import styled from 'styled-components';

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 0 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: auto 1fr;
    margin-top: 5.25rem;
    margin-bottom: 3.25rem;
  }
`;

export const Main = styled.main`
  padding: 1.25rem 0.5rem;

  @media (min-width: 1024px) {
    padding: 1.25rem;
    height: calc(100vh - 8.5rem);
    overflow: auto;
  }
`;
