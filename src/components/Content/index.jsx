import React, { useCallback, useEffect } from 'react';
import {
  ContentContainer,
  EducationContainer,
  LineContainer,
  MainTextContainer,
} from './style';
import Habilities from './Habilities';
import Experiences from './Experiences';
import { education } from 'src/assets/education.js';
import useViewport from 'src/hooks/useViewport';
import Name from 'src/components/Name';
import AOS from 'aos';

const Content = () => {
  const { width } = useViewport();

  const typeWrite = useCallback((element) => {
    const textToArray = element.innerHTML.split('');
    element.innerHTML = ' ';
    textToArray.forEach((letter, i) => {
      setTimeout(() => {
        element.innerHTML += letter;
      }, 120 * i);
    });
  }, []);

  useEffect(() => {
    const title = document.querySelector('.typewriter');
    typeWrite(title);
    AOS.init({ duration: 1200 });
  }, [typeWrite]);

  return (
    <ContentContainer data-aos="fade-up">
      <MainTextContainer>
        <div className="order">
          <div className="image" />
        </div>
        <div>
          {width > 800 ? <Name /> : ''}
          <span className="typewriter">Desenvolvedora Full Stack Jr</span>
          <p>
            Graduada em Engenheira Mecânica e MBA em Gestão Empresarial.
            Acredito no poder da transformação através da educação. Sou
            persistente, determinada e busco sempre colaborar com as pessoas ao
            meu redor. Apaixonada por design, programação e tecnologia.
          </p>
        </div>
      </MainTextContainer>
      <LineContainer />
      <Habilities />
      <LineContainer />
      <EducationContainer id="education">
        <h1>FORMAÇÃO</h1>
        {education.map((e, index) => (
          <div className="line" key={index} data-aos="fade-left">
            <img src={e.image} alt="institution" />
            <div className="column">
              <p className="small">{e.year}</p>
              <p className="paragraph">{e.course}</p>
              <p className="small">{e.institution}</p>
            </div>
          </div>
        ))}
      </EducationContainer>
      <LineContainer />
      <Experiences />
    </ContentContainer>
  );
};

export default Content;
