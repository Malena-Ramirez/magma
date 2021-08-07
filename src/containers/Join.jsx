import React, { useState } from 'react';
import { Form, Button, Container, FloatingLabel } from 'react-bootstrap';
import { useForm } from '../hook/useForm';
import { useDispatch } from 'react-redux';
import { login } from '../action/action';
import {
  ArrowBack,
  LoginContainer,
  AltLoginContainer,
  AltIconContainer,
  AlternativeText,
  AlternativeTextLink,
  ImageLogin,
  JoinContainer,
  MainContainer,
} from '../components/Join/JoinStyled';
import { useHistory } from 'react-router-dom';
import { loginGoogle } from '../action/action';
import SignUp from '../components/Signup/SignUp';

const Join = () => {
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

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <>
      <JoinContainer>
        <ArrowBack className='bi bi-arrow-left-circle' onClick={handleReturn} />
        <MainContainer>
          <ImageLogin
            src='https://i.imgur.com/qi2sJKX.png'
            alt='Imagen de login'
          ></ImageLogin>
          {!show ? (
            <LoginContainer>
              <Container>
                <h1 className='text-center'>Iniciar sesión</h1>
                <Form onSubmit={handleLogIn}>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <FloatingLabel
                      controlId='floatingEmail'
                      label='Correo electrónico'
                    >
                      <Form.Control
                        type='email'
                        placeholder='Correo electrónico'
                        name='email'
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <FloatingLabel
                      controlId='floatingPassword'
                      label='Contraseña'
                    >
                      <Form.Control
                        type='password'
                        placeholder='Contraseña'
                        name='password'
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <div className='d-flex justify-content-center my-3'>
                    <Button size='lg' variant='warning' type='submit'>
                      Iniciar sesión
                    </Button>
                  </div>
                  <AlternativeText>
                    ¿No tienes una cuenta?{' '}
                    <AlternativeTextLink onClick={handleClick}>
                      Regístrate
                    </AlternativeTextLink>
                  </AlternativeText>
                  <Container>
                    <p className='text-center'>O ingresa con</p>
                    <AltLoginContainer>
                      <AltIconContainer>
                        <i
                          onClick={handleLoginGoogle}
                          className='bi bi-google'
                        ></i>
                      </AltIconContainer>
                      <AltIconContainer>
                        <i className='bi bi-facebook'></i>
                      </AltIconContainer>
                    </AltLoginContainer>
                  </Container>
                </Form>
              </Container>
            </LoginContainer>
          ) : (
            <SignUp />
          )}
        </MainContainer>
      </JoinContainer>
    </>
  );
};
export default Join;
