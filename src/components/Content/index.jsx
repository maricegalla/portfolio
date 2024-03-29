import React, { useCallback, useEffect } from 'react';
import {
  ContentContainer,
  EducationContainer,
  LineContainer,
  MainTextContainer,
} from './style';
import Habilities from './Habilities';
import Experiences from './Experiences';
import ContactForm from './Contact';
import { education } from 'src/helpers/education.js';
import useViewport from 'src/hooks/useViewport';
import Name from 'src/components/Name';
import AOS from 'aos';
import Projects from './Projects';

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
          {width > 900 ? <Name /> : ''}
          <span className="typewriter">Desenvolvedora Full Stack</span>
          <p>
            Graduada em Engenheira Mecânica, MBA em Gestão Empresarial e
             Web Full Stack na Trybe. Sou persistente, determinada e
            busco sempre colaborar com as pessoas ao meu redor. Apaixonada pelo
            universo Star Wars, design, programação e tecnologia.
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
      <LineContainer />
      <Projects />
      <LineContainer />
      <ContactForm />
    </ContentContainer>
  );
};

export default Content;
