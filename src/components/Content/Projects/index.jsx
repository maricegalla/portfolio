import React, {useEffect, useState} from 'react';
import { ProjectsContainer } from './style';
import axios from 'axios'

const Projects = () => {

  const [projects, setProjects] = useState([])

  const getProjects = async () => {
    const data = await axios.get('https://gitconnected.com/v1/portfolio/maricegalla');
    const response = data.data.projects
    setProjects(response)
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <ProjectsContainer>
      <h1>PROJETOS</h1>
    </ProjectsContainer>
  );
}

export default Projects;