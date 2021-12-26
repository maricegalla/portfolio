import styled from 'styled-components';

const NameContainer = styled.div`
  h1 {
    font-size: 95px;
    margin: 0;
  }

  h2 {
    font-size: 40px;
    margin: 0;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4264c7 !important;
    text-align: center;
    font-family: 'Nunito', sans-serif;
    width: fit-content;

    h1 {
      font-size: 42px;
    }

    h2 {
      font-size: 18px;
    }
  }
`;

export { NameContainer };
