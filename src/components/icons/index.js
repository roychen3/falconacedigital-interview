import styled from 'styled-components';

export * from './BriefcaseIcon';
export * from './FilmIcon';
export * from './GlobeIcon';
export * from './NewspaperIcon';
export * from './PlayIcon';
export * from './RocketIcon';
export * from './SearchIcon';
export * from './ExclamationCircleIcon';
export * from './XMarkIcon';

export const StyledIconBox = styled.div`
  min-width: 1rem;
  display: flex;
  align-items: center;

  & > svg {
    flex-grow: 1;
  }
`;
