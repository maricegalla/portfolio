import React from 'react';
import { Chrono } from 'react-chrono';
import useViewport from 'src/hooks/useViewport';
import { experiences } from 'src/assets/experiences';
import { ExperienceContainer } from './style';

const Experiences = () => {
  const { width } = useViewport();
  return (
    <ExperienceContainer id="experiences">
      <h1>EXPERIÊNCIAS</h1>
      {width >= 1000 
      ? <div>
        <Chrono 
          items={experiences}
          cardHeight={100}
          cardWidth={300}
          scrollable={true}
          hideControls
          disableClickOnCircle={true}
          mode="VERTICAL_ALTERNATING" />
      </div>
      : 
      ''}
    </ExperienceContainer>
  );
};

export default Experiences;
