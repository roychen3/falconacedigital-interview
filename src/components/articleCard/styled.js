import styled from 'styled-components';

export const StyledArticleCard = styled.div`
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: #d0d0d0;
  overflow: hidden;
`;

export const Link = styled.a`
  curser: pointer;
  text-decoration: none;
  color: black;
`;

export const Image = styled.img`
  width: 100%;
  min-height: 11.25rem;
  max-height: 11.25rem;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  padding: 1rem;
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 2rem;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const SourceLayout = styled.div`
  display: flex;
  align-items: ceter;
  gap: 0.5rem;
  font-size: 0.75rem;
`;

export const Media = styled.p`
  font-weight: 100;
  color: gray;
`;

export const Time = styled.p`
  font-weight: 100;
  color: gray;
`;
