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

export { ExperienceContainer };
