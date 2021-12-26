import React from 'react';
import { FooterContainer } from './style';
import SocialMedia from 'src/components/SocialMedia';
import TopButton from 'src/components/TopButton';
import useViewport from 'src/hooks/useViewport';

const Footer = () => {
  const { width } = useViewport();

  return (
    <FooterContainer>
      {width <= 800 ? <SocialMedia /> : ''}
      <div>
        <p>© 2021 By Marília Cegalla Aldrighi</p>
        {width > 800 ? <TopButton /> : ''}
      </div>
    </FooterContainer>
  );
};

export default Footer;
