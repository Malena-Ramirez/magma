import React from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { color } from '../GlobalStyles/color';
import { FormContainer, ContactTitle, ImgTop } from './ContactStyled';
import { useForm } from "../../hook/useForm";
import { useDispatch } from 'react-redux';
import { sendMessageContact } from '../../action/contactAction';
const Contact = () => {

  const dispatch = useDispatch()

  const [formValues, handleInputChange, reset] = useForm({
                id: '',
                name:  '',
                email: '',
                message: ''
  })

  const {id, name, email, message} = formValues;

  const handleMessageContact = (e) => {
    e.preventDefault();
    console.log(id, name, email, message)
    dispatch(sendMessageContact(id, name, email, message))
    Swal.fire({
      title: '¡Operación exitosa!',
      text: 'Tus preguntas han sido enviadas.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: color.main,
    });
    reset();
  }

  return (
    <>
      <ImgTop></ImgTop>
      <ContactTitle>Contáctanos</ContactTitle>
      <FormContainer>
        <Form onSubmit={handleMessageContact}>
          <FloatingLabel
            controlId='floatingName'
            label='Nombre'
            className='mb-3'
          >
            <Form.Control 
              type='email' 
              placeholder='Nombre' 
              name='name'
              value={name}
              onChange={handleInputChange}
              required  
            />
          </FloatingLabel>

          <FloatingLabel
            controlId='floatingEmail'
            label='Correo'
            className='mb-3'
          >
            <Form.Control 
              type='email' 
              placeholder='Correo' 
              name='email'
              value={email}
              onChange={handleInputChange}
              required  
            />
          </FloatingLabel>

          <FloatingLabel
            controlId='floatingTextarea2'
            label='Escribe tu mensaje'
            className='mb-3'
            name='message'
          >
            <Form.Control
              as='textarea'
              placeholder='Escribe tu mensaje'
              name='message'
              value={message}
              onChange={handleInputChange}
              style={{ height: '150px' }}
              required
            />
          </FloatingLabel>
          <div className='d-flex justify-content-center'>
            <Button 
              variant='warning' 
              type='submit'
              onClick={handleMessageContact}
              >
              Enviar
            </Button>
          </div>
        </Form>
      </FormContainer>
    </>
  );
};

export default Contact;
