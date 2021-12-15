import styled from 'styled-components';

const ContentContainer = styled.div`
  background-color: #0e1821;
  height: 100%;
  width: 100%;
  padding-top: 110px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTextContainer = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  gap: 30px;
  padding: 20px;
  width: fit-content;
  height: fit-content;

  & > div {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: min-content;
    align-items: center;

    h1 {
      font-size: 95px;
      margin: 0;
    }

    h2 {
      font-size: 40px;
      margin: 0;
    }

    span {
      color: #5b7ee0;
      font-weight: 700;
      font-size: 22px;
    }

    p {
      text-align: justify;
      font-weight: 100;
      font-size: 16px;
      font-family: 'Nunito', sans-serif;
    }
  }
  & > div {
    & > img {
      height: 270px;
      border-radius: 50%;
    }
  }
`;

const LineContainer = styled.div`
  border-top: 2px solid #5b7ee0;
  width: 60%;
`;

const HabilitiesContainer = styled.div`
  color: #fff;
  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  text-align: center;
  margin: 0 100px;

  & > div {
    display: flex;
    flex-direction: line;
    flex-wrap: wrap;
    font-size: 100px;
    justify-content: center;
    gap: 50px;

    & > i:hover {
      /* font-size: 120px; */
      transform: scale(1.3);
      transition: transform 0.5s ease-in-out;
    }
  }
`;

export {
  ContentContainer,
  MainTextContainer,
  LineContainer,
  HabilitiesContainer,
};
