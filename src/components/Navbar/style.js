import styled from 'styled-components';

const NavBarContainer = styled.nav`
  display: flex;
  gap: 20px;

  & > div {
    display: flex;
    gap: 20px;
  }

  p {
    font-size: 14px;
    font-family: 'Nunito', sans-serif;
    color: #127890;
    font-weight: bold;
  }

  .nav {
    border: none;
    background: none;
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
    color: #127890;
    font-weight: bold;
    cursor: pointer;
  }
`;

export { NavBarContainer };
