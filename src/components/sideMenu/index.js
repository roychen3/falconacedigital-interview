import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import {
  BriefcaseIcon,
  FilmIcon,
  GlobeIcon,
  NewspaperIcon,
  PlayIcon,
  RocketIcon,
} from '../icons';

import {
  StyledSideMenu,
  StyledLink,
  ItemLayout,
  IconBox,
  Name,
} from './styled';

const SideMenu = ({ data }) => {
  const [params] = useSearchParams();
  const category = params.get('category');

  const getIcon = (key) => {
    switch (key) {
      case 'hot':
        return <NewspaperIcon />;

      case 'global':
        return <GlobeIcon />;

      case 'entertainment':
        return <FilmIcon />;

      case 'business':
        return <BriefcaseIcon />;

      case 'sports':
        return <PlayIcon />;

      case 'technology':
        return <RocketIcon />;

      default:
        return <NewspaperIcon />;
    }
  };

  return (
    <StyledSideMenu>
      {data.map((item, itemIdx) => (
        <li key={itemIdx}>
          <StyledLink to={item.url}>
            <ItemLayout $isSelected={item.url.includes(category)}>
              <IconBox>
                {getIcon(item.url.replace('breaking_news?category=', ''))}
              </IconBox>
              <Name>{item.name}</Name>
            </ItemLayout>
          </StyledLink>
        </li>
      ))}
    </StyledSideMenu>
  );
};

SideMenu.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SideMenu;
