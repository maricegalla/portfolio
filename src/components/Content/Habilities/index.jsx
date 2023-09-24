import React from 'react';
import { HabilitiesContainer } from './style.js';
import Tippy from '@tippyjs/react';
import "tippy.js/dist/tippy.css";
import './custom.css';
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
        <Tippy content="HTML" placement="top" theme="custom">
          <i className="devicon-html5-plain colored" />
        </Tippy>
        <Tippy content="CSS" placement="top" theme="custom">
          <i className="devicon-css3-plain colored" />
        </Tippy>
        <Tippy content="Javascript" placement="top" theme="custom">
          <i className="devicon-javascript-plain colored" />
        </Tippy>
        <Tippy content="Typescript" placement="top" theme="custom">
          <i className="devicon-typescript-plain colored" />
        </Tippy>
        <Tippy content="Vue.Js" placement="top" theme="custom">
          <i class="devicon-vuejs-plain colored" />
        </Tippy>
        <Tippy content="Bootstrap" placement="top" theme="custom">
          <i className="devicon-bootstrap-plain colored" />
        </Tippy>
        <Tippy content="Bulma" placement="top" theme="custom">
          <i className="devicon-bulma-plain colored" />
        </Tippy>
        <Tippy content="Styled Components" placement="top" theme="custom">
          <img src={styledLogo} alt="styled" />
        </Tippy>
        <Tippy content="React" placement="top" theme="custom">
          <i className="devicon-react-original colored" />
        </Tippy>
        <Tippy content="Redux" placement="top" theme="custom">
          <i className="devicon-redux-original colored" />
        </Tippy>
        <Tippy content="Node.Js" placement="top" theme="custom">
          <i className="devicon-nodejs-plain colored" />
        </Tippy>
        <Tippy content="Express" placement="top" theme="custom">
          <i className="devicon-express-original" />
        </Tippy>
        <Tippy content="Socket.IO" placement="top" theme="custom">
          <i className="devicon-socketio-plain" />
        </Tippy>
        <Tippy content="MySQL" placement="top" theme="custom">
          <i className="devicon-mysql-plain-wordmark colored" />
        </Tippy>
        <Tippy content="MongoDB" placement="top" theme="custom">
          <i className="devicon-mongodb-plain-wordmark colored" />
        </Tippy>
        <Tippy content="Jest" placement="top" theme="custom">
          <i className="devicon-jest-plain colored" />
        </Tippy>
        <Tippy content="Mocha" placement="top" theme="custom">
          <i className="devicon-mocha-plain colored" />
        </Tippy>
        <Tippy content="React Test Library" placement="top" theme="custom">
          <img src={rtlLogo} alt="rtl" />
        </Tippy>
        <Tippy content="Python" placement="top" theme="custom">
          <i className="devicon-python-plain colored" />
        </Tippy>
        <Tippy content="Figma" placement="top" theme="custom">
          <img src={figmaLogo} alt="figma" />
        </Tippy>
        <Tippy content="GitHub" placement="top" theme="custom">
          <i className="devicon-github-plain" />
        </Tippy>
        <Tippy content="Markdown" placement="top" theme="custom">
          <i className="devicon-markdown-original" />
        </Tippy>
        <Tippy content="PowerBI" placement="top" theme="custom">
          <img src={powerBiLogo} alt="powerBi" />
        </Tippy>
        <Tippy content="Tableau" placement="top" theme="custom">
          <img src={tableauLogo} alt="tableau" />
        </Tippy>
        <Tippy content="Slack" placement="top" theme="custom">
          <img src={slackLogo} alt="slack" />
        </Tippy>
        <Tippy content="Discord" placement="top" theme="custom">
          <img src={discordLogo} alt="discord" />
        </Tippy>
        <Tippy content="Monday" placement="top" theme="custom">
          <img src={mondayLogo} alt="monday" />
        </Tippy>
        <Tippy content="Trello" placement="top" theme="custom">
          <img src={trelloLogo} alt="monday" />
        </Tippy>
        <Tippy content="Jira" placement="top" theme="custom">
          <i className="devicon-jira-plain colored" />
        </Tippy>
      </div>
    </HabilitiesContainer>
  );
};

export default Habilities;
