import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { FooterContainer, BackToTop } from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2021 By Marília Cegalla Aldrighi</p>
      <BackToTop onClick={() => window.scrollTo(0, 0)}>
        <p>Voltar ao Topo</p>
        <MdKeyboardArrowUp />
      </BackToTop>
    </FooterContainer>
  );
};

export default Footer;
