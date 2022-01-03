import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  margin: 0 100px;
  width: 60%;
  gap: 40px;
  box-sizing: border-box;

  & > h1 {
    margin-top: 0;
    text-align: center;
  }
`;

export { ProjectsContainer };
