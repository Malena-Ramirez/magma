import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { DescriptionJobTop } from '../Jobs/JobsStyled';

const MyVerticallyCenteredModal = (props) => {
  const handleClick = () => {
    props.onHide();
    Swal.fire({
      title: 'Exitos!',
      text: 'Tu correo ha sido enviado!',
      icon: 'success',
      confirmButtonText: 'me encanta',
    });
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <h4 className=''>Nombre de la profesión</h4>
          <DescriptionJobTop>
            Fecha de nacimiento | Lugar donde vive{' '}
          </DescriptionJobTop>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='row'>
        <div className='col-3'>
          <img src='' alt='Nombre del aspirante' style={{ width: 100 }} />
          <DescriptionJobTop className='m-3'>
            Conocimientos extras
          </DescriptionJobTop>
          <DescriptionJobTop className='m-3'>Idiomas</DescriptionJobTop>
          <DescriptionJobTop className='m-3'>
            Informacion de contacto
          </DescriptionJobTop>
        </div>
        <div className='col-9'>
          <h4>Descripción</h4>
          <p>Sobre mí</p>
          <h4>Requisitos</h4>
          <p>Certificados, intereses,</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick} variant='outline-warning'>
          Contacto
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
