import styled from 'styled-components';

export const ArticleContainer = styled.div`
  margin: 0 auto;
  max-width: 60.25rem;
`;

export const ArticleTitle = styled.h2`
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const ArticleCardLayout = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const SpinnerLayout = styled.div`
  text-align: center
`;
