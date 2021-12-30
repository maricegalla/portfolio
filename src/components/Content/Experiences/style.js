import styled from 'styled-components';

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  margin: 0 100px;
  width: 80%;
  gap: 40px;

  & > h1 {
    margin-top: 0;
    text-align: center;
  }

  
  @media (max-width: 800px) {
    width: 90%;
    gap: 20px;
    margin: 0;

    h1 {
      transform: scale(0.7);
    }
  }
`;

export { ExperienceContainer };
