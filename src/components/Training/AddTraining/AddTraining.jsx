import React from 'react';
import { useForm } from '../../../hook/useForm';
import { FloatingLabel, Form, Button } from 'react-bootstrap';

const AddTraining = () => {
  const [formValues, handleInputChange, reset] = useForm({
    title: '',
    urlVideo: '',
    description: '',
  });

  const { title, urlVideo, description } = formValues;

  const handleLogIn = (e) => {
    e.preventDefault();
    console.log(title, urlVideo, description);
    // dispatch(login(email, password));
    reset();
  };

  // const history = useHistory();
  // const handleReturn = (e) => {
  //   history.goBack();
  // };

  return (
    <div className='mb-5'>
      <h2 className='text-center h3 mb-4'>Agregar capacitación</h2>
      <Form onSubmit={handleLogIn}>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <FloatingLabel controlId='floatingTitle' label='Título'>
            <Form.Control
              type='text'
              placeholder='Título'
              name='title'
              required
              value={title}
              onChange={handleInputChange}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicUrlVideo'>
          <FloatingLabel controlId='floatingUrlVideo' label='Enlace del video'>
            <Form.Control
              type='text'
              placeholder='Enlace del video'
              name='urlVideo'
              required
              value={urlVideo}
              onChange={handleInputChange}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicDescription'>
          <FloatingLabel controlId='floatingDescription' label='Descripción'>
            <Form.Control
              as='textarea'
              placeholder='Descripción'
              name='description'
              required
              style={{ height: '100px' }}
              value={description}
              onChange={handleInputChange}
            />
          </FloatingLabel>
        </Form.Group>
        <div className='d-flex justify-content-center my-3'>
          <Button size='lg' variant='warning' type='submit' className='px-5'>
            Crear
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTraining;
