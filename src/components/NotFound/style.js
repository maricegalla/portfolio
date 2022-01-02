import styled from 'styled-components';

const NotFoundContainer = styled.div`
  background-color: #0e1821;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 100px;

  img {
    width: 60%;
  }

  @media (max-width: 1000px) {
    justify-content: center;
    gap: 50px;

    img {
      width: 350px;
    }
  }
`;

export { NotFoundContainer };
