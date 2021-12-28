import React from 'react';
import { HamburguerMenuContainer } from './style';
import { IoIosMenu } from 'react-icons/io';

const HamburguerMenu = ({onClick}) => {
  return (
    <HamburguerMenuContainer onClick={onClick} >
      <IoIosMenu size={'2em'}/>
    </HamburguerMenuContainer>
  );
};

export default HamburguerMenu;
