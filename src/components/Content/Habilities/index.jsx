import React from 'react';
import { HabilitiesContainer } from './style.js';
import styledLogo from 'src/assets/styledLogo.png';
import figmaLogo from 'src/assets/figmaLogo.png';
import powerBiLogo from 'src/assets/powerBiLogo.png';
import tableauLogo from 'src/assets/tableauLogo.png';
import rtlLogo from 'src/assets/rtlLogo.png';
import slackLogo from 'src/assets/slackLogo.png';
import discordLogo from 'src/assets/discordLogo.png';
import mondayLogo from 'src/assets/mondayLogo.png';
import trelloLogo from 'src/assets/trelloLogo.png';

const Habilities = () => {
  return (
    <HabilitiesContainer>
      <h1>HABILIDADES</h1>
      <div>
        <i class="devicon-html5-plain colored" />
        <i class="devicon-css3-plain colored" />
        <i class="devicon-javascript-plain colored" />
        <i class="devicon-typescript-plain colored" />
        <i class="devicon-bootstrap-plain colored" />
        <i class="devicon-bulma-plain colored" />
        <img src={styledLogo} alt="styled" />
        <i class="devicon-react-original colored" />
        <i class="devicon-redux-original colored" />
        <i class="devicon-nodejs-plain colored" />
        <i class="devicon-express-original" />
        <i class="devicon-socketio-plain" />
        <i class="devicon-mysql-plain-wordmark colored" />
        <i class="devicon-mongodb-plain-wordmark colored" />
        <i class="devicon-jest-plain colored" />
        <i class="devicon-mocha-plain colored" />
        <img src={rtlLogo} alt="rtl" />
        <i class="devicon-python-plain colored" />
        <img src={figmaLogo} alt="figma" />
        <i class="devicon-github-plain" />
        <i class="devicon-markdown-original" />
        <img src={powerBiLogo} alt="powerBi" />
        <img src={tableauLogo} alt="tableau" />
        <img src={slackLogo} alt="slack" />
        <img src={discordLogo} alt="discord" />
        <img src={mondayLogo} alt="monday" />
        <img src={trelloLogo} alt="monday" />
      </div>
    </HabilitiesContainer>
  );
};

export default Habilities;
