import React from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from '../searchBar';
import { Container } from '../container/styled';
import microsoftBingLogo from '../../image/Microsoft_Bing_logo.png';

import { StyledHeader, HeaderLayout, Logo, LogoImage } from './styled';

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (keywords) => {
    navigate(`/search?keywords=${keywords}`);
  };

  return (
    <StyledHeader>
      <Container>
        <HeaderLayout>
          <Logo>
            <LogoImage src={microsoftBingLogo} alt='microsoft bing' />
          </Logo>
          <SearchBar handleSearch={handleSearch} />
        </HeaderLayout>
      </Container>
    </StyledHeader>
  );
};

Header.propTypes = {};

export default Header;
