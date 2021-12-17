import styled from 'styled-components';

const HabilitiesContainer = styled.div`
  color: #fff;
  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  text-align: center;
  margin: 0 100px;
  width: 60%;

  & > h1 {
    margin-top: 0;
  }

  & > div {
    display: flex;
    flex-direction: line;
    flex-wrap: wrap;
    font-size: 80px;
    justify-content: center;
    gap: 50px;

    & > img {
      height: 80px;
    }

    & > img:hover {
      transform: scale(1.3);
      transition: transform 0.5s ease-in-out;
    }

    & > i:hover {
      transform: scale(1.3);
      transition: transform 0.5s ease-in-out;
    }
  }
`;

export {HabilitiesContainer}