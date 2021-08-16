import React, { useEffect } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { ContainerInfoJobs } from '../JobsStyled';
import { useForm } from '../../../hook/useForm';
import { jobsAction, startSaveJobs } from '../../../action/jobsAction';
import { useDispatch } from 'react-redux';
import CreatedJobs from './CreatedJobs';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const BusinessJobs = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    jobName: '',
    city: '',
    salary: '',
    description: '',
  });

  const { jobName, city, salary, description } = formValues;

  const { active } = useSelector((state) => state.jobs);

  useEffect(() => {
    if (active) {
      reset(active);
    }
  }, [active]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (active) {
      active.jobName = jobName;
      active.city = city;
      active.salary = salary;
      active.description = description;

      dispatch(startSaveJobs(active));

      Swal.fire({
        icon: 'success',
        title: 'La vacante se editó exitosamente',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      dispatch(jobsAction(jobName, city, salary, description));

      Swal.fire({
        icon: 'success',
        title: 'La vacante se creó exitosamente',
        showConfirmButton: false,
        timer: 1500,
      });
    }

    reset();
  };

  return (
    <>
      <ContainerInfoJobs className='mt-4'>
        <div>
          <h2 className='text-center mb-4'>
            {active ? 'Editar' : 'Crear una nueva'} vacante
          </h2>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId='floatingJobName'
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
              controlId='floatingCityInput'
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
              controlId='floatingSalaryInput'
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
              controlId='floatingDescriptionInput'
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
