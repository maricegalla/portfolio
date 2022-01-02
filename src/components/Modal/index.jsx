import React from 'react';
import { ModalContainer } from './style';
import { IoCloseCircle } from 'react-icons/io5';

const modalData = [
  { id: '#habilities', name: 'Habilidades' },
  { id: '#education', name: 'Formação' },
  { id: '#experiences', name: 'Experiências' },
  { id: '#contact', name: 'Contato' },
];

const Modal = ({ display, onClick }) => {
  const scrollTo = (id) => {
    const button = document.getElementById('closeBtn');
    button.click();
    const anchor = document.querySelector(id);
    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <ModalContainer display={display}>
      <div>
        <button className="nav btn" id="closeBtn" onClick={onClick}>
          <IoCloseCircle size={'2em'} />
        </button>
        {modalData.map((data, index) => (
          <button key={index} onClick={() => scrollTo(data.id)} className="nav">
            {data.name}
          </button>
        ))}
      </div>
    </ModalContainer>
  );
};

export default Modal;
