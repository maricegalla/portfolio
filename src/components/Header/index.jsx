import React, { useState } from 'react';
import { HeaderContainer } from './style';
import NavBar from '../Navbar';
import SocialMedia from '../SocialMedia';
import useViewport from 'src/hooks/useViewport';
import Name from 'src/components/Name';
import HamburguerMenu from 'src/components/HamburguerMenu';
import Modal from 'src/components/Modal';

const Header = () => {
  const { width } = useViewport();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    const noScroll = require('no-scroll');
    noScroll.on()
  };

  const closeModal = () => {
    setIsOpen(false);
    const noScroll = require('no-scroll');
    noScroll.off()
  };

  return (
    <HeaderContainer>
      {width > 800 ? <SocialMedia /> : ''}
      {width >= 1000 ? <NavBar /> : ''}
      {width <= 800 ? (
        <div className="container">
          <Name />
          <HamburguerMenu onClick={() => openModal()}/>
          <Modal
            display={isOpen ? 'flex' : 'none'}
            onClick={() => closeModal()}
          />
        </div>
      ) : (
        ''
      )}
    </HeaderContainer>
  );
};

export default Header;
