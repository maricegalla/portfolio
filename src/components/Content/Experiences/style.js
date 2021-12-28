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

  
  .vertical-timeline-element-title {
    color: #4264c7;
    font-weight: 700;
    font-size: 24px;
    margin-top: 10px;
  }

  .vertical-timeline-element-content-arrow {
    border-right: 7px solid #5c97e7;
  }

  .vertical-timeline-element-subtitle {
    color: #333;
    font-weight: 400;
    font-size: 16px;
  }

  .vertical-timeline-element-content {
    padding: 5px 45px 15px;
    background-color: #61dafb;
    background-image: linear-gradient(0deg, #61dafb 0%, #5b7ee0 100%);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  //   img {
  //     height: 100px;
  //   }

  //   .paragraph {
  //     margin: 0;
  //     text-align: justify;
  //     font-size: 24px;
  //     font-family: 'Nunito', sans-serif;
  //     font-weight: 700;
  //   }

  //   .small {
  //     margin: 0;
  //     text-align: justify;
  //     font-size: 16px;
  //     font-family: 'Nunito', sans-serif;
  //   }

  //   .column {
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: center;
  //     width: 300px;
  //   }

  //   .line {
  //     display: flex;
  //     flex-direction: line;
  //     align-items: center;
  //     gap: 40px;
  //   }

  //   @media (max-width: 800px) {
  //     width: 90%;
  //     gap: 20px;
  //     margin: 0;

  //     h1 {
  //       transform: scale(0.7);
  //     }

  //     img {
  //       height: 80px;
  //     }

  //     .column {
  //       width: 100%;
  //     }

  //     .line {
  //       gap: 20px;
  //       width: 100%;
  //     }

  //     .paragraph {
  //       font-size: 18px;
  //     }
  //   }
`;

export { ExperienceContainer };
