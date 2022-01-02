import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #2bc0e4;
  background: -webkit-linear-gradient(
    to top,
    #eaecc6,
    #2bc0e4
  );
  background: linear-gradient(
    to top,
    #eaecc6,
    #2bc0e4
  );
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 10;

  a {
    color: #127890;
  }

  div {
    display: flex;
    gap: 32px;
  }

  @media (max-width: 800px) {
    div {
      gap: 0;
    }

    .container {
      gap: 0;
      width: 80%;
      justify-content: space-between;
    }
  }
`;

export { HeaderContainer };
