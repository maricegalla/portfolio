import React from 'react';
import {
  ContentContainer,
  EducationContainer,
  LineContainer,
  MainTextContainer,
} from './style';
import Habilities from './Habilities';
import { education } from 'src/assets/education.js';

const Content = () => {
  return (
    <ContentContainer>
      <MainTextContainer>
        <div>
          <h1>Marília</h1>
          <h2>Cegalla Aldrighi</h2>
          <span>Desenvolvedora Full-Stack Jr</span>
          <p>
            Graduada em Engenheira Mecânica e MBA em Gestão Empresarial.
            Acredito no poder da transformação através da educação. Sou
            persistente, determinada e busco sempre colaborar com as pessoas ao
            meu redor. Apaixonada por design, programação e tecnologia.
          </p>
        </div>
        <div className="image" />
      </MainTextContainer>
      <LineContainer />
      <Habilities />
      <LineContainer />
      <EducationContainer>
        <h1>FORMAÇÃO</h1>
        {education.map((e) => (
          <div className="line">
            <img src={e.image} alt="institution" />
            <div className="column">
              <p className="small">{e.year}</p>
              <p className="paragraph">{e.course}</p>
              <p className="small">{e.institution}</p>
            </div>
          </div>
        ))}
      </EducationContainer>
    </ContentContainer>
  );
};

export default Content;
