import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  margin: 0 100px;
  width: 60%;
  gap: 40px;

  .field {
    font-family: 'Nunito', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      font-size: 20px;
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
    }
  }

  .form {
    width: 50%;
    font-family: 'Nunito', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export { ContactContainer };
