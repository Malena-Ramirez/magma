import React from 'react';
import { Form, Button, Container, Image } from 'react-bootstrap';
import { useForm } from '../hook/useForm';
import { useDispatch } from 'react-redux';
import { login } from '../action/action';
import { ArrowBack } from '../components/LogIn/Login';
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
    <div>
      <Container>
        <div className='mt-3'>
          <ArrowBack
            className='bi bi-arrow-left-circle'
            onClick={handleReturn}
          ></ArrowBack>
        </div>
        <h2 className='text-center mt-2'>Iniciar Sesión</h2>
        <div className='d-flex justify-content-center my-5'>
          <Image
            style={{ width: '100px' }}
            roundedCircle={true}
            className='fluid'
            src='https://www.wrkbemanning.no/wp-content/uploads/2017/04/profile-pic-dummy.jpg'
            alt='foto de perfil'
          />
        </div>
        <Form onSubmit={handleLogIn}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type='email'
              placeholder='Correo electrónico'
              name='email'
              value={email}
              onChange={handleInputChange}
            />
            <Form.Text className='text-muted'></Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type='password'
              placeholder='Contraseña'
              name='password'
              value={password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className='d-flex justify-content-center'>
            <Button size='lg' variant='warning' type='submit'>
              Iniciar Sesión
            </Button>
          </div>
          <Container className='auth__social-networks'>
            <Container className='google-btn' onClick={handleLoginGoogle}>
              <Container className='google-icon-wrapper'>
                <img
                  className='google-icon'
                  src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                  alt='google button'
                />
              </Container>
            </Container>
          </Container>
        </Form>
        {/* iconos de google y facebook */}
      </Container>
    </div>
  );
};

export default LogIn;
