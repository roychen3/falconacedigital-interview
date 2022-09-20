import React from 'react';

import { Container } from '../container/styled';
import { StyledFooter, FooterLayout, List, ItemLink, Author } from './styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterLayout>
          <List>
            <ItemLink href='#'>隱私權和 Cookie</ItemLink>
            <ItemLink href='#'>法律聲明</ItemLink>
            <ItemLink href='#'>廣告</ItemLink>
            <ItemLink href='#'>關於我們的廣告</ItemLink>
            <ItemLink href='#'>說明</ItemLink>
            <ItemLink href='#'>意見反應</ItemLink>
          </List>
          <Author>© 2022 Microsoft</Author>
        </FooterLayout>
      </Container>
    </StyledFooter>
  );
};

Footer.propTypes = {};

export default Footer;
