import React from 'react';
import { HeaderContainer } from './style';
import NavBar from '../Navbar';
import SocialMedia from '../SocialMedia';
import useViewport from 'src/hooks/useViewport';

const Header = () => {
  const { width } = useViewport();

  return (
    <HeaderContainer>
      {width > 800 ? <SocialMedia /> : ''}
      {width >= 1000 ? <NavBar /> : ''}
    </HeaderContainer>
  );
};

export default Header;
