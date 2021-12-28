import React from 'react';
import { ExperienceContainer } from './style';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { experience } from 'src/assets/experience.js';
import { workIcon } from 'src/assets/workIcon';
import 'react-vertical-timeline-component/style.min.css';

const Experiences = () => {
  return (
    <ExperienceContainer>
      <h1>EXPERIÊNCIAS</h1>
      <VerticalTimeline>
        {experience.map((e, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={e.year}
            key={index}
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={workIcon}
          >
            <p className="vertical-timeline-element-title">{e.company}</p>
            <p className="vertical-timeline-element-subtitle">{e.position}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </ExperienceContainer>
  );
};

export default Experiences;
