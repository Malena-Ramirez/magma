import React from 'react'
import {
    ArrowBack,
    LoginContainer,
    ProfileIcon,
    AltLoginContainer,
    AltIconContainer,
    AlternativeText,
    AlternativeTextLink
  } from '../Join/JoinStyled';
import { Form, Button, Container, FloatingLabel, DropdownButton, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginGoogle } from '../../action/action';

const SignUp = () => {

    const dispatch = useDispatch();

    const history = useHistory();
    const handleReturn = (e) => {
      history.goBack();
    };

    const handleJoin = () => {
        history.push("/Join");
      }

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
        <h1 className='text-center'>Registrarse</h1>
        <Form>
        <Form.Group className='mb-3' controlId='formName'>
            <FloatingLabel controlId='floatingName' label='Nombres y Apellidos'>
              <Form.Control
                type='text'
                placeholder='Nombres y Apellidos'
                name='name'
                required
                // value={email}
                // onChange={handleInputChange}
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
                // value={email}
                // onChange={handleInputChange}
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
                // value={password}
                // onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <FloatingLabel controlId='floatingPassword2' label='Confirmar Contraseña'>
              <Form.Control
                type='password2'
                placeholder='Confirmar Contraseña'
                name='password2'
                required
                // value={password}
                // onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
          <DropdownButton id="dropdown-item-button bg-light" title="Tipo de Perfil">
            <Dropdown.Item as="button">Aspirantes</Dropdown.Item>
            <Dropdown.Item as="button">Empresas</Dropdown.Item>
          </DropdownButton>
          </Form.Group>
          <div className='d-flex justify-content-center my-3'>
            <Button size='lg' variant='warning' type='submit'>
              Registrarse
            </Button>
          </div>
          <AlternativeText>
            ¿Ya tienes una cuenta? <AlternativeTextLink onClick={handleJoin}>Inicia seción</AlternativeTextLink>
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
      </LoginContainer>
    </>
    )
}

export default SignUp
