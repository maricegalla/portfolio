import React from 'react';
import { Chrono } from 'react-chrono';
import useViewport from 'src/hooks/useViewport';
import { experiences } from 'src/assets/experiences';
import { ExperienceContainer } from './style';
import airplane from 'src/assets/airplane.svg';
import laptop from 'src/assets/laptop.svg';
import stove from 'src/assets/stove.svg';

const Experiences = () => {
  const { width } = useViewport();
  return (
    <ExperienceContainer id="experiences">
      <h1>EXPERIÊNCIAS</h1>
      {width >= 1000 ? (
        <div>
          <Chrono
            items={experiences}
            cardHeight={100}
            cardWidth={300}
            scrollable={true}
            hideControls
            disableClickOnCircle={true}
            mode="VERTICAL_ALTERNATING"
          >
            <div className="chrono-icons">
              <img src={laptop} alt="airplane" />
              <img src={airplane} alt="airplane" />
              <img src={airplane} alt="airplane" />
              <img src={airplane} alt="airplane" />
              <img src={stove} alt="airplane" />
            </div>
          </Chrono>
        </div>
      ) : (
        ''
      )}
    </ExperienceContainer>
  );
};

export default Experiences;
