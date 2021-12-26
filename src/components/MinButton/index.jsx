import React from 'react';
import { MinButtonContainer } from './style';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const MinButton = () => {
  return (
    <MinButtonContainer onClick={() => window.scrollTo(0, 0)}>
      <IoIosArrowDropupCircle size={'2em'}/>
    </MinButtonContainer>
  );
};

export default MinButton;
