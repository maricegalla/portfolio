import React from 'react';
import { HeaderContainer } from './style';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { VscGithub } from 'react-icons/vsc';
import { IoIosMail  } from 'react-icons/io';
import { IoLogoWhatsapp } from "react-icons/io5";
import NavBar from './Navbar'

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <a
          href="https://www.linkedin.com/in/marilia-aldrighi/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin size={'3em'} />
        </a>
        <a
          href="https://github.com/maricegalla/"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithub size={'3em'} />
        </a>
        <a
          href="mailto: maricegalla@gmail.com?subject=Contato Portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <IoIosMail size={'3em'} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5511981745895&text=Contato%20Portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoWhatsapp size={'3em'} />
        </a>
      </div>
      <NavBar/>
    </HeaderContainer>
  );
};

export default Header;
