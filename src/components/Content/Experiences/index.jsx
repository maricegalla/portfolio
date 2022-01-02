import React from 'react';
import { experiences } from 'src/assets/experiences';
import { ExperienceContainer } from './style';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experiences = () => {
  return (
    <ExperienceContainer id="experiences">
      <h1>EXPERIÊNCIAS</h1>
      <VerticalTimeline>
        {experiences.map((e, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={e.date}
            iconStyle={{ background: 'transparent' }}
            icon={<img className="img_logo" alt="logo" src={e.image} />}
            key={index}
          >
            <h6>{e.company}</h6>
            <p>{e.position}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </ExperienceContainer>
  );
};

export default Experiences;
