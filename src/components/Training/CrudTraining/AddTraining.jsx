import React, { useEffect } from 'react';
import { useForm } from '../../../hook/useForm';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  startSaveTraining,
  trainingCardAction,
} from '../../../action/trainingCardAction';
import Swal from 'sweetalert2';

const AddTraining = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    title: '',
    urlVideo: '',
    category: '',
    description: '',
  });

  const { title, urlVideo, category, description } = formValues;

  const { active } = useSelector((state) => state.trainingCard);

  useEffect(() => {
    if (active) {
      reset(active);
    }
  }, [active]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (active) {
      active.title = title;
      active.urlVideo = urlVideo;
      active.category = category;
      active.description = description;

      dispatch(startSaveTraining(active));

      Swal.fire({
        icon: 'success',
        title: 'La capacitación se editó exitosamente',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      dispatch(trainingCardAction(title, urlVideo, category, description));

      Swal.fire({
        icon: 'success',
        title: 'La capacitación se creó exitosamente',
        showConfirmButton: false,
        timer: 1500,
      });
    }
    reset();
  };

  return (
    <div className='mb-5'>
      <h2 className='text-center h3 mb-4'>
        {active ? 'Editar' : 'Agregar'} capacitación
      </h2>
      <Form onSubmit={handleSubmit}>
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
        <Form.Group className='mb-3' controlId='formBasicUrlVideo'>
          <FloatingLabel controlId='floatingSelect' label='Categoría'>
            <Form.Select
              aria-label='Floating label select example'
              name='category'
              required
              value={category}
              onChange={handleInputChange}
            >
              <option>Seleccione una categoría</option>
              <option value='engineering'>Ingeniería</option>
              <option value='design'>Diseño</option>
              <option value='marketing'>Marketing</option>
              <option value='personal-skills'>Habilidades personales</option>
              <option value='job-preparation'>Preparación laboral</option>
              <option value='other'>Otra</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicDescription'>
          <FloatingLabel controlId='floatingDescription' label='Descripción'>
            <Form.Control
              as='textarea'
              placeholder='Descripción'
              name='description'
              required
              style={{ height: '180px' }}
              value={description}
              onChange={handleInputChange}
            />
          </FloatingLabel>
        </Form.Group>
        <div className='d-flex justify-content-center my-3'>
          <Button
            size='lg'
            variant='warning'
            type='submit'
            className='px-5 w-100'
          >
            {active ? 'Editar' : 'Crear'}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTraining;
