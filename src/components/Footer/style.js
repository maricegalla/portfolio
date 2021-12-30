import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #2bc0e4;
  background: -webkit-linear-gradient(
    to bottom,
    #eaecc6,
    #2bc0e4
  );
  background: linear-gradient(
    to bottom,
    #eaecc6,
    #2bc0e4
  );
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #127890;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  width: 100%;
  height: 80px;

  & > div {
    display: flex;
    flex-direction: line;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
    height: 100px;

    & > div {
      display: flex;
      flex-direction: line;
      align-content: center;
      gap: 20px;
      width: fit-content;
    }
  }
`;

export { FooterContainer };
