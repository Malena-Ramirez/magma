import React, {useState} from 'react';
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
  AlternativeTextLink
} from '../components/Join/JoinStyled';
import { useHistory } from 'react-router-dom';
import { loginGoogle } from '../action/action';
import SignUp from "../components/Signup/SignUp";

const Join = (props) => {
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

  const [show, setShow] = useState(false)

  const handleClick = () =>{
    setShow(true);
    console.log('Hola');
  }

  return (
    <>
      <div className='mt-3 ms-3'>
        <ArrowBack
          className='bi bi-arrow-left-circle'
          onClick={handleReturn}
        />
        <div>
          <img src='https://i.imgur.com/nlvt5Gl.png' alt='Imagen de login'/>
        </div>
        {
          !show ?
          (<LoginContainer>
          <h1 className='text-center'>Iniciar Sesión</h1>
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
            <div className='d-flex justify-content-center my-3'>
              <Button size='lg' variant='warning' type='submit'>
                Iniciar Sesión
              </Button>
            </div>
            <AlternativeText>
              ¿No tienes una cuenta? <AlternativeTextLink onClick={handleClick}>Regístrate</AlternativeTextLink>
            </AlternativeText>
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
          </LoginContainer>)
          : 
          ( <SignUp /> )
        }
      </div>
      
    </>
  );
};
export default Join;
