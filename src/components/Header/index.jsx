import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  const noScroll = require('no-scroll');

  const location = useLocation();

  const openModal = () => {
    noScroll.on();
    setIsOpen(true);
  };

  const closeModal = () => {
    noScroll.off();
    setIsOpen(false);
  };

  return (
    <HeaderContainer>
      {(width >= 900 || !location.pathname.includes('/portfolio')) ? <SocialMedia /> : ''}
      {(width >= 900 && location.pathname.includes('/portfolio')) ? <NavBar /> : ''}
      {(width < 900 && location.pathname.includes('/portfolio')) ? (
        <div className="container">
          <Name />
          <HamburguerMenu onClick={() => openModal()} />
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
