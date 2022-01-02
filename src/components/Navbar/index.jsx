import React from 'react';
import { NavBarContainer } from './style';

const navData = [
  { id: '#habilities', name: 'Habilidades' },
  { id: '#education', name: 'Formação' },
  { id: '#experiences', name: 'Experiências' },
  { id: '#contact', name: 'Contato' },
];

const NavBar = () => {
  const scrollTo = (id) => {
    const anchor = document.querySelector(id);
    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };
  
  return (
    <NavBarContainer>
      {navData.map((data, index) =>
        (index < (navData.length)-1) 
        ? (
          <div key={index}>
            <button onClick={() => scrollTo(data.id)} className="nav">
              {data.name}
            </button>
            <p>|</p>
          </div>
        ) 
        : (
          <div key={index}>
            <button onClick={() => scrollTo(data.id)} className="nav">
              {data.name}
            </button>
          </div>
        )
      )}
    </NavBarContainer>
  );
};

export default NavBar;
