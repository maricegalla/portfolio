import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { VscGithub } from 'react-icons/vsc';
import { IoIosMail } from 'react-icons/io';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { SocialMediaContainer } from './style';
import Resume from 'src/assets/resume.svg'

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
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
      <a
       href="https://gitconnected.com/maricegalla/resume"
       target="_blank"
       rel="noreferrer">
        <img src={Resume} alt="Resume" />
      </a>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
