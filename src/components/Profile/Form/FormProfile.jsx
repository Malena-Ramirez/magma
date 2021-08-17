import React from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { color } from '../../GlobalStyles/color';
// import { profileAction } from '../../../action/profileAction';
import { TitlePages } from '../../Jobs/JobsStyled';

const FormProfile = ({ setShowEdit }) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    setShowEdit(false);
  };

  return (
    <>
      <TitlePages>Editar perfil</TitlePages>
      <Form className='my-3'>
        <FloatingLabel
          controlId='floatingInput'
          label='Teléfono'
          className='mb-3'
        >
          <Form.Control
            type='number'
            placeholder='Teléfono'
            name='phoneNumber'
          />
        </FloatingLabel>
        <FloatingLabel
          controlId='floatingInput'
          label='Profesión'
          className='mb-3'
        >
          <Form.Control
            type='text'
            placeholder='Profesión'
            name='profession'
            // value={profession}
            // onChange={handleInputChange}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId='floatingInput'
          label='Ciudad'
          className='mb-3'
        >
          <Form.Control type='text' placeholder='Ciudad' name='city' />
        </FloatingLabel>

        <FloatingLabel
          controlId='floatingInput'
          label='Educación'
          className='mb-3'
        >
          <Form.Control type='text' placeholder='Educación' name='education' />
        </FloatingLabel>
        <FloatingLabel
          controlId='floatingInput'
          label='Acerca de mí'
          className='mb-3'
        >
          <Form.Control
            as='textarea'
            style={{ height: '150px' }}
            placeholder='Acerca de mí'
            name='aboutMe'
          />
        </FloatingLabel>
        <div className='d-flex justify-content-center'>
          <Button
            variant='warning'
            size='lg'
            className='mb-3'
            style={{ width: '150px' }}
            type='submit'
          >
            Enviar
          </Button>
          <Button
            size='lg'
            className='mb-3 ms-3'
            style={{ width: '150px', backgroundColor: color.main }}
            onClick={handleCancel}
          >
            Cancelar
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormProfile;
