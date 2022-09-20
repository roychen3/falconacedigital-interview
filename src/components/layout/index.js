import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import MobileMenu from '../mobileMenu';
import SideBar from '../sideBar';
import SideMenu from '../sideMenu';
import Footer from '../footer';

import { MainLayout, Main } from './styled';

import mockMenu from '../../mockData/menu.json';

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <MobileMenu data={mockMenu} />
      <MainLayout>
        <SideBar>
          <SideMenu data={mockMenu} />
        </SideBar>
        <Main>{children}</Main>
      </MainLayout>
      <Footer></Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
