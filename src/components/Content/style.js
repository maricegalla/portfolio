import styled from 'styled-components';
import myPicture from 'src/assets/myPicture.jpg';

const ContentContainer = styled.div`
  background-color: #0e1821;
  height: 100%;
  width: 100%;
  padding-top: 140px;
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
  .image {
    height: 300px;
    width: 300px;
    background-image: linear-gradient(
        to bottom,
        rgba(225, 225, 225, 0),
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.7)
      ),
      url(${myPicture});
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: none;
  }
`;

const LineContainer = styled.div`
  border-top: 2px solid #5b7ee0;
  width: 60%;
  margin: 50px;
`;

const EducationContainer = styled.div`
  color: #fff;
  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  text-align: center;
  margin: 0 100px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  & > h1 {
    margin: 0;
  }

  img {
    height: 100px
  }

  .paragraph {
    margin: 0;
    text-align: justify;
    font-size: 24px;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
  }

  .small {
    margin: 0;
    text-align: justify;
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
  }

  .column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
  }

  .line {
    display: flex;
    flex-direction: line;
    align-items: center;
    gap: 40px
  }
`;

export {
  ContentContainer,
  MainTextContainer,
  LineContainer,
  EducationContainer,
};
