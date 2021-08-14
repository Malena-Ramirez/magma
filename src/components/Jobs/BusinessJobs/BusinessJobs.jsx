import React from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { ContainerInfoJobs } from '../JobsStyled';
import { useForm } from '../../../hook/useForm';
import { jobsAction } from '../../../action/jobsAction';
import { useDispatch } from 'react-redux';
import CreatedJobs from './CreatedJobs';

const BusinessJobs = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    jobName: '',
    city: '',
    salary: '',
    description: '',
  });

  const { jobName, city, salary, description } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(jobsAction(jobName, city, salary, description));
    reset();
  };

  return (
    <>
      <ContainerInfoJobs className='mt-4'>
        <div>
          <h2 className='text-center mb-4'>Crear una nueva vacante</h2>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId='floatingInput'
              label='Nombre del cargo'
              className='mb-3'
            >
              <Form.Control
                type='text'
                placeholder='Nombre del cargo'
                name='jobName'
                value={jobName}
                onChange={handleInputChange}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId='floatingInput'
              label='Ciudad'
              className='mb-3'
            >
              <Form.Control
                type='text'
                placeholder='Ciudad'
                name='city'
                value={city}
                onChange={handleInputChange}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId='floatingInput'
              label='Salario'
              className='mb-3'
            >
              <Form.Control
                type='number'
                placeholder='Salario'
                name='salary'
                value={salary}
                onChange={handleInputChange}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId='floatingInput'
              label='Descripcion del puesto'
              className='mb-3'
            >
              <Form.Control
                as='textarea'
                placeholder='Descripción del puesto'
                name='description'
                required
                style={{ height: '180px' }}
                value={description}
                onChange={handleInputChange}
              />
            </FloatingLabel>
            <div className='d-grid gap-2'>
              <Button
                variant='warning'
                size='lg'
                className='mb-3'
                type='submit'
              >
                Enviar
              </Button>
            </div>
          </Form>
        </div>
        <CreatedJobs />
      </ContainerInfoJobs>
    </>
  );
};

export default BusinessJobs;
