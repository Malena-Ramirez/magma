import React from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { FormContainer, ContactTitle } from './ContactStyled';

const Contact = () => {
  return (
    <>
      <ContactTitle>Contáctanos</ContactTitle>
      <FormContainer>
        <Form>
          <FloatingLabel
            controlId='floatingName'
            label='Nombre'
            className='mb-3'
          >
            <Form.Control type='email' placeholder='Nombre' />
          </FloatingLabel>

          <FloatingLabel
            controlId='floatingEmail'
            label='Correo'
            className='mb-3'
          >
            <Form.Control type='email' placeholder='Correo' />
          </FloatingLabel>

          <FloatingLabel
            controlId='floatingTextarea2'
            label='Escribe tu mensaje'
            className='mb-3'
          >
            <Form.Control
              as='textarea'
              placeholder='Escribe tu mensaje'
              style={{ height: '100px' }}
            />
          </FloatingLabel>
          <div className='d-flex justify-content-center'>
            <Button variant='warning' type='submit'>
              Submit
            </Button>
          </div>
        </Form>
      </FormContainer>
    </>
  );
};

export default Contact;
