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

  & > div {
    width: 100%;
    height: fit-content;
    font-family: 'Nunito', sans-serif;
  }
  
  .css-4reink-TimelineCardTitle {
    text-align:center;
    font-weight: 700;
    color: #333 !important;
  }

  .css-2f561s-TimelineItemContentWrapper {
    text-align:center;
    color: #333 !important;
  }

  .css-xa4des-VerticalCircleWrapper::after {
    background-color: #127890;
  }

  .css-1wybm3g-Circle:not(.using-icon) {
    background-color: #127890;
  }

  .css-1wybm3g-Circle:not(.using-icon).active::after {
    background-color: #eaecc6;
  }

  .css-1f02b8t-TitleWrapper.active {
    background-color: #127890;
    color: #fff;
  }

  .css-1wybm3g-Circle.using-icon {
    background-color: #0E1821;
    transform: scale(2);
    cursor: default !important;
  }
  
  @media (max-width: 800px) {
    width: 90%;
    gap: 20px;
    margin: 0;

    h1 {
      transform: scale(0.7);
    }
  
    .css-3i23bs-TimelineMainWrapper {
      padding: 0;
    }

    .css-1iv48dl-TimelineVerticalWrapper {
      padding: 0;
    }

    .css-1f02b8t-TitleWrapper { {
      text-align: center;
      font-size: 0.8rem;
      transform: rotate(270deg);
      width: 100%;
    }
    .css-mpnodf-TimelineTitleWrapper.right {
      align-items: fit-content;
    }

  }
`;

const ExperienceTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  gap: 20px;

  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 74%;
      text-align: center;
      background-color: #fff;
      padding: 0.5em;
      border-radius: 0.2em;
      color: #333;
      gap: 0.2em;

      span {
        font-size: 14px;
      }

      p {
        font-size: 12px;
      }
    }
  }
`;

export { ExperienceContainer, ExperienceTable };
