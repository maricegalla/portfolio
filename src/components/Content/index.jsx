import React from 'react';
import {
  ContentContainer,
  EducationContainer,
  ExperienceContainer,
  LineContainer,
  MainTextContainer,
} from './style';
import Habilities from './Habilities';
import { education } from 'src/assets/education.js';
import { experience } from 'src/assets/experience.js';
import useViewport from 'src/hooks/useViewport';
import Name from 'src/components/Name';

const Content = () => {
  const { width } = useViewport();

  return (
    <ContentContainer>
      <MainTextContainer>
        <div className="order">
          <div className="image" />
        </div>
        <div>
          {width > 800 ? <Name /> : ''}
          <span>Desenvolvedora Full Stack Jr</span>
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
      <EducationContainer>
        <h1>FORMAÇÃO</h1>
        {education.map((e, index) => (
          <div className="line" key={index}>
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
      <ExperienceContainer>
        <h1>EXPERIÊNCIAS</h1>
        {experience.map((e, index) => (
          <div className="line" key={index}>
            <div className="column">
              <p className="small">{e.year}</p>
              <p className="paragraph">{e.company}</p>
              <p className="small">{e.position}</p>
            </div>
          </div>
        ))}
      </ExperienceContainer>
    </ContentContainer>
  );
};

export default Content;
