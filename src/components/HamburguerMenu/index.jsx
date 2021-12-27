import React from 'react';
import { HamburguerMenuContainer } from './style';
import { IoIosMenu } from 'react-icons/io';

const HamburguerMenu = ({onClick, onTouch}) => {
  return (
    <HamburguerMenuContainer onClick={onClick} onTouchStart={onTouch}>
      <IoIosMenu size={'2em'}/>
    </HamburguerMenuContainer>
  );
};

export default HamburguerMenu;
