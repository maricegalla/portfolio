import React, { useEffect, useState } from 'react';
import { ProjectsContainer, SwiperContainer, Content } from './style';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation } from 'swiper';
import useViewport from 'src/hooks/useViewport';

SwiperCore.use([Navigation]);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { width } = useViewport();

  const getProjects = async () => {
    const data = await axios.get(
      'https://gitconnected.com/v1/portfolio/maricegalla'
    );
    const response = data.data.projects;
    setProjects(response);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <ProjectsContainer>
      <h1 id="projects">PROJETOS</h1>
      <SwiperContainer>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          slidesPerGroup={1}
          navigation={true}
          mousewheel={true}
          grabCursor={true}
          loop={true}
          className="mySwiper"
        >
          {projects.map((item, index) => (
            <SwiperSlide >
              {width >= 900 ? 
                <Content image={item.images[0].resolutions.mobile.url}>
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <span>{item.name}</span>
            </a>
                </Content>
                : <Content image={item.images[0].resolutions.thumbnail.url}>
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <span>{item.name}</span>
            </a>
                </Content>}
              </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </ProjectsContainer>
  );
};

export default Projects;
