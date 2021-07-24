import React from 'react';
import { Form, Button, Container, FloatingLabel } from 'react-bootstrap';
import { useForm } from '../hook/useForm';
import { useDispatch } from 'react-redux';
import { login } from '../action/action';
import {
  ArrowBack,
  LoginContainer,
  ProfileIcon,
  AltLoginContainer,
  AltIconContainer,
} from '../components/LogIn/Login';
import { useHistory } from 'react-router-dom';
import { loginGoogle } from '../action/action';

const LogIn = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleLogIn = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const history = useHistory();
  const handleReturn = (e) => {
    history.goBack();
  };

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };

  return (
    <>
      <div className='mt-3 ms-3'>
        <ArrowBack
          className='bi bi-arrow-left-circle'
          onClick={handleReturn}
        ></ArrowBack>
      </div>
      <LoginContainer>
        <h1 className='text-center'>Iniciar Sesión</h1>
        <div className='d-flex justify-content-center my-1'>
          <ProfileIcon className='bi bi-person-circle'></ProfileIcon>
        </div>
        <Form onSubmit={handleLogIn}>
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
          <div className='d-flex justify-content-center my-5'>
            <Button size='lg' variant='warning' type='submit'>
              Iniciar Sesión
            </Button>
          </div>
          <Container>
            <p className='text-center'>O ingresa con</p>
            <AltLoginContainer>
              <AltIconContainer>
                <i onClick={handleLoginGoogle} className='bi bi-google'></i>
              </AltIconContainer>
              <AltIconContainer>
                <i className='bi bi-facebook'></i>
              </AltIconContainer>
            </AltLoginContainer>
          </Container>
        </Form>
      </LoginContainer>
    </>
  );
};

export default LogIn;
