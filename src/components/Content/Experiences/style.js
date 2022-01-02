import styled from 'styled-components';

const ExperienceContainer = styled.div`
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

  & > div {
    font-family: 'Nunito', sans-serif;
    color: #333;
  }

  span {
    font-size: 14px;
  }

  p {
    font-size: 12px;
  }

  ::after,
  ::before {
    box-sizing: content-box;
  }

  .vertical-timeline-element-icon,
  .bounce-in {
    box-shadow: 0px 0px transparent;
    text-align: center;
  }

  .vertical-timeline-element-date {
    width: fit-content !important;
    color: #fff;
    font-weight: bold;
    padding: 0.8em;
    background-color: #127890;
    border-radius: 1.5em;
    text-align: center !important;
    margin: 0 1em;
  }

  .img_logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  @media (max-width: 800px) {
    width: 90%;
    gap: 20px;

    h1 {
      transform: scale(0.7);
    }
  }

  @media only screen and (max-width: 1169px) {
    .vertical-timeline {
      width: 100%;
    }

    .vertical-timeline-element-icon {
      top: 6%;
    }

    .img_logo {
      width: 30px;
      height: 30px;
    }

    .vertical-timeline-element-content {
      display: flex;
      flex-direction: column;
    }

    .vertical-timeline-element-date {
      width: 100% !important;
      color: #127890;
      padding: 0.8em;
      background-color: #fff;
      border-radius: none;
      font-weight: bold;
      text-align: center !important;
      margin: 0;
      order: -1;
    }
  }
`;

export { ExperienceContainer };
