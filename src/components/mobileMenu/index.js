import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import { StyledMobileMenu, StyledLink, Name } from './styled';

const MobileMenu = ({ data }) => {
  const [params] = useSearchParams();
  const category = params.get('category');

  return (
    <StyledMobileMenu>
      {data.map((item, itemIdx) => (
        <StyledLink
          key={itemIdx}
          to={item.url}
          $isSelected={item.url.includes(category)}
        >
          <Name>{item.name}</Name>
        </StyledLink>
      ))}
    </StyledMobileMenu>
  );
};

MobileMenu.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MobileMenu;
