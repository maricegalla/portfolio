import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #61dafb;
  background-image: linear-gradient(180deg, #61dafb 0%, #5b7ee0 100%);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #4264c7;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-around;
`;

const BackToTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4264c7;
  border-radius: 24px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Nunito', sans-serif;
  padding: 0 20px;
  gap: 8px;
  text-align: center;
  text-decoration: none;
`;

export { FooterContainer, BackToTop };
