import React from 'react';
import { HomeButtonContainer } from './style';
import { HiHome } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const BackToHome = () => {
  const navigate = useNavigate();

  return (
    <HomeButtonContainer onClick={() => navigate("/")}>
      <p>Voltar</p>
      <HiHome />
    </HomeButtonContainer>
  );
};

export default BackToHome
