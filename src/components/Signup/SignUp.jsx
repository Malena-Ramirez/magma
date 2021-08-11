import React from 'react';
import {
  LoginContainer,
  AlternativeText,
  AlternativeTextLink,
} from '../Join/JoinStyled';
import {
  Form,
  Button,
  FloatingLabel,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registroEmailPasswordName } from '../../action/action';
import { useForm } from '../../hook/useForm';

const SignUp = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const handleJoin = () => {
    history.push('/ingresar');
  };

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registroEmailPasswordName(email, password, name));
  };

  return (
    <>
      <LoginContainer>
        <h1 className='text-center'>Registrarse</h1>
        <Form onSubmit={handleRegister}>
          <Form.Group className='mb-3' controlId='formName'>
            <FloatingLabel controlId='floatingName' label='Nombres y Apellidos'>
              <Form.Control
                type='text'
                placeholder='Nombres y Apellidos'
                name='name'
                required
                value={name}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <FloatingLabel controlId='floatingEmail' label='Correo electrónico'>
              <Form.Control
                type='email'
                placeholder='Correo electrónico'
                name='email'
                required
                value={email}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <FloatingLabel controlId='floatingPassword' label='Contraseña'>
              <Form.Control
                type='password'
                placeholder='Contraseña'
                name='password'
                required
                value={password}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <FloatingLabel
              controlId='floatingPassword2'
              label='Confirmar Contraseña'
            >
              <Form.Control
                type='password'
                placeholder='Confirmar Contraseña'
                name='password2'
                required
                value={password2}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <DropdownButton
              id='dropdown-item-button bg-light'
              title='Tipo de Perfil'
            >
              <Dropdown.Item as='button'>Aspirantes</Dropdown.Item>
              <Dropdown.Item as='button'>Empresas</Dropdown.Item>
            </DropdownButton>
          </Form.Group>
          <div className='d-flex justify-content-center my-3'>
            <Button size='lg' variant='warning' type='submit'>
              Registrarse
            </Button>
          </div>
          <AlternativeText>
            ¿Ya tienes una cuenta?{' '}
            <AlternativeTextLink onClick={handleJoin}>
              Inicia sesión
            </AlternativeTextLink>
          </AlternativeText>
        </Form>
      </LoginContainer>
    </>
  );
};

export default SignUp;
