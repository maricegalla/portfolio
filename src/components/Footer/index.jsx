import React from 'react';
import { FooterContainer } from './style';
import SocialMedia from 'src/components/SocialMedia';
import TopButton from 'src/components/TopButton';
import useViewport from 'src/hooks/useViewport';

const Footer = () => {
  const { width } = useViewport();

  return (
    <FooterContainer>
      {width <= 900 ? <SocialMedia /> : ''}
      <div>
        <p>Idealizado e criado por Marília Cegalla Aldrighi</p>
        {width > 900 ? <TopButton /> : ''}
      </div>
    </FooterContainer>
  );
};

export default Footer;
