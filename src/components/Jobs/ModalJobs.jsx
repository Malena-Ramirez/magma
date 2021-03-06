import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { CandidateAction } from '../../action/candidateAction';
import { color } from '../GlobalStyles/color';
import { DescriptionJobTop } from './JobsStyled';

const MyVerticallyCenteredModal = (props) => {
  const { job, companyInfo, ...rest } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    rest.onHide();
    Swal.fire({
      title: '¡Operación exitosa!',
      text: 'Tu Hoja de vida ha sido enviada.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: color.main,
    });
    dispatch(CandidateAction(job.id, job.idBusiness));
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
            <p>$ {parseInt(job.salary).toLocaleString()}</p>
            <h4>Ciudad</h4>
            <p>{job.city}</p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick} variant='warning'>
          Postular
        </Button>
        <Button onClick={rest.onHide} style={{ backgroundColor: color.main }}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
