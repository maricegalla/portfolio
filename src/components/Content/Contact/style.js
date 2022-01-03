import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  margin: 0 100px;
  width: 80%;
  gap: 60px;

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .sendButton {
    width: fit-content;
    background-color: #127890;
    border-radius: 24px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    padding: 10px 20px;
    gap: 8px;
    text-align: center;
    text-decoration: none;
  }

  .rotatedForm {
    width: 50%;
    font-family: 'Nunito', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    background-color: #fff;
    border: none;
    transform: rotate(-5deg);
  }

  .form {
    width: 100%;
    font-family: 'Nunito', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 30px;
    border-radius: 10px;
    background: linear-gradient(to top, #eaecc6, #2bc0e4);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    transform: rotate(5deg);
  }

  .field {
    font-family: 'Nunito', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    label {
      font-size: 16px;
      color: #333;
      font-weight: bold;
    }

    input {
      height: 40px;
      border-radius: 5px;
      padding: 0 15px;
    }

    textarea {
      height: 100px;
      border-radius: 5px;
      padding: 10px 15px;
      resize: none;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    gap: 20px;

    .rotatedForm {
      width: 80%;
      transform: rotate(-3deg);
    }

    .form {
      transform: rotate(3deg);
    }

    h1 {
      font-size: 40px;
    }
  }

  .iti__flag {
    background-image: url('path/to/flags.png');
  }

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .iti__flag {
      background-image: url('path/to/flags@2x.png');
    }
  }

  .PhoneInputCountryIcon--border {
    box-shadow: none !important;
  }

  .PhoneInputCountrySelectArrow {
    color: #127890;
  }

`;

export { ContactContainer };
