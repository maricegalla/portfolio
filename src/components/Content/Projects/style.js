import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  margin: 0 100px;
  width: 80%;
  box-sizing: border-box;

  & > h1 {
    margin-top: 0;
    text-align: center;
  }

  @media (max-width: 900px) {
    width: 90%;

    h1 {
      font-size: 40px;
    }
  }
`;

const SwiperContainer = styled.div`
  display: flex;
  width: 70%;

  @media (max-width: 900px) {
    width: 100%;

    .swiper-slide {
      height: 200px !important;
    }

    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
      left: -10px !important;
    }

    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
      right: -10px !important;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 12px !important;
    }
  }

  @media (min-width: 901px) and (max-width: 1100px) {
    width: 100%;

    .swiper-slide {
      height: fit-content;
    }
  }

  .swiper {
    width: 100%;
    height: fit-content;
  }

  .swiper-slide {
    border-radius: 5px;
    justify-content: center;
    flex-direction: column;
    font-size: 18px;
    height: 400px;

    a,
    a:hover,
    a:focus,
    a:active {
      text-decoration: none !important;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: 50%;
    width: 60px;
    height: 60px;
    color: #127890;
    font-weight: 800;
    outline: 0;
    transition: background-color 0.2s ease, color 0.2s ease;

    &::after {
      font-size: 20px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-color: #127890;
      background-image: linear-gradient(to bottom, #127890, #eaecc6);
      background-size: 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }

  .swiper-button-prev {
    &:after {
      position: relative;
      left: -1px;
    }
  }

  .swiper-button-next {
    &:after {
      position: relative;
      left: 1px;
    }
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 10px;
    right: auto;
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 10px;
    left: auto;
  }

  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
  }
`;

const Content = styled.div`
  border-radius: 5px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  gap: 8px;
  padding: 24px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  text-transform: uppercase;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    background-color: #127890;
    color: #fff;
    width: fit-content;
    align-self: center;
    padding: 10px 15px;
    border-radius: 20px;
  }

  @media (max-width: 900px) {
    span {
      font-size: 12px;
    }
  }
`;

export { ProjectsContainer, SwiperContainer, Content };
