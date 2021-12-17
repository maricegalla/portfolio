import React from 'react';
import { NavBarContainer } from './style';

const NavBar = () => {
  return (
    <NavBarContainer>
      <button onClick={() => window.scrollTo(0, 520)} className="nav">Habilidades</button>
      <p>|</p>
      <button onClick={() => window.scrollTo(0, 1300)} className="nav">Formação</button>
    </NavBarContainer>
  );
};

export default NavBar;
