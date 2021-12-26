import React from 'react';
import { TopButtonContainer } from './style';
import { MdKeyboardArrowUp } from 'react-icons/md';

const BackToTop = () => {
  return (
    <TopButtonContainer onClick={() => window.scrollTo(0, 0)}>
      <p>Voltar ao Topo</p>
      <MdKeyboardArrowUp />
    </TopButtonContainer>
  );
};

export default BackToTop
