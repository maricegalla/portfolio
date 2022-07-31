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
    <HabilitiesContainer id="habilities">
      <h1>HABILIDADES</h1>
      <div>
        <i className="devicon-html5-plain colored" />
        <i className="devicon-css3-plain colored" />
        <i className="devicon-javascript-plain colored" />
        <i className="devicon-typescript-plain colored" />
        <i class="devicon-vuejs-plain colored" />
        <i className="devicon-bootstrap-plain colored" />
        <i className="devicon-bulma-plain colored" />
        <img src={styledLogo} alt="styled" />
        <i className="devicon-react-original colored" />
        <i className="devicon-redux-original colored" />
        <i className="devicon-nodejs-plain colored" />
        <i className="devicon-express-original" />
        <i className="devicon-socketio-plain" />
        <i className="devicon-mysql-plain-wordmark colored" />
        <i className="devicon-mongodb-plain-wordmark colored" />
        <i className="devicon-jest-plain colored" />
        <i className="devicon-mocha-plain colored" />
        <img src={rtlLogo} alt="rtl" />
        <i className="devicon-python-plain colored" />
        <img src={figmaLogo} alt="figma" />
        <i className="devicon-github-plain" />
        <i className="devicon-markdown-original" />
        <img src={powerBiLogo} alt="powerBi" />
        <img src={tableauLogo} alt="tableau" />
        <img src={slackLogo} alt="slack" />
        <img src={discordLogo} alt="discord" />
        <img src={mondayLogo} alt="monday" />
        <img src={trelloLogo} alt="monday" />
        <i className="devicon-jira-plain colored" />
      </div>
    </HabilitiesContainer>
  );
};

export default Habilities;
