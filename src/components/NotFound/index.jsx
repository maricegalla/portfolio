import React from 'react';
import { NotFoundContainer } from './style';
import BackToHome from 'src/components/HomeButton';
import error from 'src/assets/404 Error-pana.svg';

const index = () => {
  return (
    <NotFoundContainer>
      <img src={error} alt="error" />
      <BackToHome />
    </NotFoundContainer>
  );
};

export default index;
