import React from 'react';
import { ModalContainer } from './style';
import { IoCloseCircle } from 'react-icons/io5';

const Modal = ({ display, onClick }) => {
  const goTo = (x, y) => {
    window.scrollTo(x, y);
    const button = document.getElementById('closeBtn');
    button.click();
  };

  return (
    <ModalContainer display={display}>
      <div>
        <button className="nav btn" id="closeBtn" onClick={onClick}>
          <IoCloseCircle size={'2em'} />
        </button>
        <button onClick={() => goTo(0, 0)} className="nav">
          Início
        </button>
        <button onClick={() => goTo(0, 490)} className="nav">
          Habilidades
        </button>
        <button onClick={() => goTo(0, 1150)} className="nav">
          Formação
        </button>
      </div>
    </ModalContainer>
  );
};

export default Modal;
