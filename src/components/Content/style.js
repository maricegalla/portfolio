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
  z-index: -2;

  @media (max-width: 800px) {
    padding-top: 110px;
  }
`;

const MainTextContainer = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  gap: 100px;
  padding: 40px;
  width: fit-content;
  height: fit-content;
  justify-content: center;

  & > div {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: min-content;
    align-items: center;

    span {
      color: #127890;
      font-weight: 700;
      font-size: 22px;
      padding: 10px 0;
    }

    p {
      text-align: justify;
      font-weight: 100;
      font-size: 16px;
      font-family: 'Nunito', sans-serif;
    }
  }

  .image {
    height: 350px;
    width: 350px;
    background-image: url(${myPicture}),
      linear-gradient(to bottom right, #eaecc6, #2bc0e4, #127890);
    border-radius: 50% 50% 10% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-origin: border-box;
    background-clip: content-box, border-box;
    border: 6px solid transparent;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.5);
    display: flex;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width:70%;
    gap: 20px;

    & > div {
      display: flex;
      flex-direction: column;
      width: 130%;
      height: fit-content;
      align-items: center;
    }

    .image {
      width: 200px;
      height: 200px;
    }
  }
`;

const LineContainer = styled.div`
  /* border-top: 10px solid #127890; */
  width: 60%;
  margin: 50px;
  height: 4px;
  background: linear-gradient(to left, #eaecc6, #2bc0e4, #127890, #2bc0e4, #eaecc6);

  @media (max-width: 800px) {
    margin: 20px;
  }
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
    height: 100px;
    border-radius: 8px;
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
    gap: 40px;
  }

  @media (max-width: 800px) {
    width: 85%;
    gap: 20px;
    margin: 0;

    h1 {
      transform: scale(0.7);
    }

    img {
      height: 80px;
    }

    .column {
      width: 100%;
    }

    .line {
      gap: 12px;
      width: 100%;
    }

    .paragraph {
      font-size: 18px;
    }
  }
`;

export {
  ContentContainer,
  MainTextContainer,
  LineContainer,
  EducationContainer,
};
