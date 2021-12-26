import React from 'react';
import { HeaderContainer } from './style';
import NavBar from '../Navbar';
import SocialMedia from '../SocialMedia';
import useViewport from 'src/hooks/useViewport';
import Name from 'src/components/Name'
import HamburguerMenu from 'src/components/HamburguerMenu';


const Header = () => {
  const { width } = useViewport();

  return (
    <HeaderContainer>
      {width > 800 ? <SocialMedia /> : ''}
      {width >= 1000 ? <NavBar /> : ''}
      {width <= 800 ? <div className="container"><Name /> <HamburguerMenu /></div>: ''}
    </HeaderContainer>
  );
};

export default Header;
