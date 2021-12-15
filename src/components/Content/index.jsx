import React from 'react';
import {
  ContentContainer,
  HabilitiesContainer,
  LineContainer,
  MainTextContainer,
} from './style';
import myPicture from '../../assets/myPicture.jpg';

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
        <div>
          <img src={myPicture} alt="Me" />
        </div>
      </MainTextContainer>
      <LineContainer />
      <HabilitiesContainer>
        <h1>HABILIDADES</h1>
        <div>
          <i class="devicon-html5-plain colored" />
          <i class="devicon-css3-plain colored" />
          <i class="devicon-javascript-plain colored" />
          <i class="devicon-typescript-plain colored" />
          <i class="devicon-bootstrap-plain colored"/>
          <i class="devicon-bulma-plain colored"/>
          <i class="devicon-react-original colored" />
          <i class="devicon-redux-original colored" />
          <i class="devicon-nodejs-plain colored" />
          <i class="devicon-express-original" />
          <i class="devicon-socketio-plain"/>
          <i class="devicon-mysql-plain-wordmark colored" />
          <i class="devicon-mongodb-plain-wordmark colored"/>
          <i class="devicon-jest-plain colored" />
          <i class="devicon-github-plain"/>
          <i class="devicon-python-plain colored"></i>
        </div>
      </HabilitiesContainer>
    </ContentContainer>
  );
};

export default Content;
