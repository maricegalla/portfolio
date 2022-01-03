import React, { useEffect, useState } from 'react';
import { ContactContainer } from './style';
import AOS from 'aos';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import * as Yup from 'yup';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [errors, setErrors] = useState({});

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .required('Nome é obrigatório')
      .min(3, 'Insira um nome válido'),
    subject: Yup.string().required('Asunto é obrigatório'),
    message: Yup.string().required('Mensagem é obrigatória'),
    email: Yup.string()
      .required('E-mail é obrigatório')
      .email('Insira um e-mail válido'),
    phone: Yup.number().required('Telefone é obrigatório'),
  });

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      userSchema.validateSync(
        {
          name,
          subject,
          message,
          email,
          phone,
        },
        {
          abortEarly: false,
        }
      );
      emailjs
        .sendForm('gmail', 'template', e.target, 'user_IAWSiU9QFhEWm23VpAZeK')
        .then(
          (result) => {
            Swal.fire({
              icon: 'success',
              title: 'Mensagem enviada!',
              confirmButtonColor: '#127890',
            });
            e.target.reset();
            setName('');
            setSubject('');
            setMessage('');
            setEmail('');
            setPhone();
            setErrors({});
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
    } catch (err) {
      const { inner } = err;
      let formErrors = {};

      if (inner && inner[0]) {
        inner.forEach((error) => {
          const { path, message } = error;

          if (!formErrors[path]) {
            formErrors[path] = message;
          }
        });
      }

      console.log('form errors', formErrors);

      setErrors(formErrors);
    }
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <small>{errors.name}</small>
            </div>
            <div className="field">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Digite o assunto"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <small>{errors.subject}</small>
            </div>
            <div className="field">
              <label htmlFor="message">Mensagem</label>
              <textarea
                name="message"
                id="message"
                placeholder="Digite a mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <small>{errors.message}</small>
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <small>{errors.email}</small>
            </div>
            <div className="field">
              <label htmlFor="phone">Telefone</label>
              <PhoneInput
                placeholder="Digite seu número"
                defaultCountry="BR"
                name="phone"
                id="phone"
                value={phone}
                onChange={setPhone}
              />
              <small>{errors.phone}</small>
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
