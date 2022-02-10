import styled from 'styled-components';

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 10px;
  height: 40px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #127890;
  }
  
  img {
    height: 40px;
    fill: #127890;
  }
`;

export { SocialMediaContainer };
