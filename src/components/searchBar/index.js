import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { SearchIcon } from '../icons';
import { StyledSearchBar, SearchBarLayout, Input, IconBox } from './styled';

const SearchBar = ({ handleSearch }) => {
  const [keywords, setkeywords] = useState('');

  const handleChange = (event) => {
    setkeywords(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (keywords) {
      handleSearch(keywords);
    }
  };

  return (
    <StyledSearchBar>
      <form onSubmit={handleSubmit}>
        <SearchBarLayout>
          <Input type="text" value={keywords} onChange={handleChange}></Input>

          <button type="submit">
            <IconBox>
              <SearchIcon />
            </IconBox>
          </button>
        </SearchBarLayout>
      </form>
    </StyledSearchBar>
  );
};

SearchBar.defaultProps = {
  handleSearch: () => {},
};
SearchBar.propTypes = {
  handleSearch: PropTypes.func,
};

export default SearchBar;
