import styled from 'styled-components';

const HabilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  text-align: center;
  margin: 20px 100px;
  width: 60%;
  gap: 40px;

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
  }

  @media (max-width: 900px) {
    width: 90%;
    gap: 20px;

    h1 {
      font-size: 40px
    }

    & > div {
      gap: 30px;
      font-size: 50px;
      & > img {
        height: 50px;
      }
      & > img:hover {
        transform: none;
      }

      & > i:hover {
        transform: none;
      }
    }
  }
`;

export { HabilitiesContainer };
