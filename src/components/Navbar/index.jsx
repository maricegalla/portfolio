import React from 'react';
import { NavBarContainer } from './style';

const NavBar = () => {
  return (
    <NavBarContainer>
      <button onClick={() => window.scrollTo(0, 500)} className="nav">Habilidades</button>
      <p>|</p>
      <button onClick={() => window.scrollTo(0, 1050)} className="nav">Formação</button>
      <p>|</p>
      <button onClick={() => window.scrollTo(0, 1770)} className="nav">Experiências</button>
    </NavBarContainer>
  );
};

export default NavBar;
