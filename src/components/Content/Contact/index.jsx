import React, { useState, useCallback, useEffect } from 'react';
import { ContactContainer } from './style';
import AOS from 'aos';

const ContactForm = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    subject: '',
    message: '',
    email: '',
    phone: '',
  });

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputValues({ ...inputValues, [name]: value });
    },
    [inputValues]
  );

  useEffect(() => {
    AOS.init({ duration: 3000, timeout: 2000 });
  }, []);

  return (
    <ContactContainer id="contact">
      <h1>CONTATO</h1>
      <div data-aos="flip-up">
        <div className="rotatedForm">
          <form className="form" data-aos="flip-left">
            <div className="field">
              <label for="firstname">Nome</label>
              <input
                type="text"
                name="name"
                id="firstname"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="field">
              <label for="subject">Assunto</label>
              <input
                type="text"
                name="subject"
                id="subject"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="field">
              <label for="message">Mensagem</label>
              <textarea
                name="message"
                id="message"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="field">
              <label for="phone">Telefone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button type="submit" className="sendButton" value="Send Email">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </ContactContainer>
  );
};

export default ContactForm;
