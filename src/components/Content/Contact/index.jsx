import React, { useEffect, useState } from 'react';
import { ContactContainer } from './style';
import AOS from 'aos';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const ContactForm = () => {
  const [value, setValue] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template', e.target, 'user_IAWSiU9QFhEWm23VpAZeK')
      .then(
        (result) => {
          Swal.fire({
            icon: 'success',
            title: 'Mensagem enviada!',
            confirmButtonColor: '#127890',
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo deu errado',
            confirmButtonColor: '#127890',
          });
        }
      );
    e.target.reset();
    setValue('');
  };

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <ContactContainer id="contact">
      <h1>CONTATO</h1>
      <div data-aos="flip-up">
        <div className="rotatedForm">
          <form
            className="form"
            method="post"
            action="#"
            data-aos="flip-left"
            onSubmit={sendEmail}
          >
            <div className="field">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="field">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Digite o assunto"
              />
            </div>
            <div className="field">
              <label htmlFor="message">Mensagem</label>
              <textarea
                name="message"
                id="message"
                placeholder="Digite a mensagem"
              />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Telefone</label>
              <PhoneInput
                placeholder="Digite seu número"
                defaultCountry="BR"
                name="phone"
                id="phone"
                value={value}
                onChange={setValue}
              />
            </div>
            <input
              type="submit"
              id="button"
              className="sendButton"
              value="Enviar"
            />
          </form>
        </div>
      </div>
    </ContactContainer>
  );
};

export default ContactForm;
