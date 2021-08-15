import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { DescriptionJobTop } from './JobsStyled';

const MyVerticallyCenteredModal = (props) => {
  const { job, companyInfo, ...rest } = props;

  const handleClick = () => {
    rest.onHide();
    Swal.fire({
      title: 'Exitos!',
      text: 'Tu Hoja de vida ha sido enviada',
      icon: 'success',
      confirmButtonText: 'me encanta',
    });
  };

  return (
    <Modal
      {...rest}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        {job && (
          <Modal.Title id='contained-modal-title-vcenter'>
            <h4 className=''>{job.jobName}</h4>
            <DescriptionJobTop>{job.city}</DescriptionJobTop>
          </Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body className='row'>
        {job && companyInfo && (
          <div className='col-3'>
            <img
              src={companyInfo.image}
              alt='Nombre de la empresa'
              style={{ width: 100 }}
            />
            <DescriptionJobTop className='m-3'>
              Fecha de publicación: {job.updateDate}
            </DescriptionJobTop>
          </div>
        )}
        {job && (
          <div className='col-9'>
            <h4>Descripción</h4>
            <p>{job.description}</p>
            <h4>Salario</h4>
            <p>{job.salary}</p>
            <h4>Ciudad</h4>
            <p>{job.city}</p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick} variant='outline-warning'>
          Postular
        </Button>
        <Button onClick={rest.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
