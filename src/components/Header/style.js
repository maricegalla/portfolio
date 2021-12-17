import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #61dafb;
  background-image: linear-gradient(0deg, #61dafb 0%, #5b7ee0 100%);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  position: fixed;

  a {
    color: #4264c7;
  }

  div {
    display: flex;
    gap: 32px;
  }
`;

export { HeaderContainer };
