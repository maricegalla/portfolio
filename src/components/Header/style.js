import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #acc9f4;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  color: #5b7ee0;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  position: fixed;

  a {
    color: #5b7ee0;
  }

  div {
    display: flex;
    gap: 32px;
  }
`;

export { HeaderContainer };
