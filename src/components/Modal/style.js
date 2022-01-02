import styled from 'styled-components';

const ModalContainer = styled.div`
  background-color: #a5d6af;
  background-image: linear-gradient(180deg, #a5d6af 0%, #127890 100%);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${(props) => props.display}!important;
  overflow: hidden;

  & > div {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 50%;
    width: 100%;
  }

  .nav {
    padding: 30px;
    border: none;
    background: none;
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
    color: #127890;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    text-transform: uppercase;
  }

  .btn {
    text-align: right;
  }
`;

export { ModalContainer };
