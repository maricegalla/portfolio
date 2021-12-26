import React from 'react';
import { HamburguerMenuContainer } from './style';
import { IoIosMenu } from 'react-icons/io';

const HamburguerMenu = () => {
  return (
    <HamburguerMenuContainer>
      <IoIosMenu size={'2em'}/>
    </HamburguerMenuContainer>
  );
};

export default HamburguerMenu;
