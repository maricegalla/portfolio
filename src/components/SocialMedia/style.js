import styled from 'styled-components';

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 20px;
  height: 48px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #127890;
  }
  
  img {
    height: 48px;
    fill: #127890;
  }
`;

export { SocialMediaContainer };
