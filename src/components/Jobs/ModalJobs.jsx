import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const MyVerticallyCenteredModal = (props) => {
  const handleClick = () => {
    props.onHide();
    Swal.fire({
      title: 'Exitos!',
      text: 'Tu Hoja de vida ha sido enviada',
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
          <h4 className='align-middle text-center'>Nombre de la empresa</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='row'>
        <img
          src='https://i.imgur.com/jFJEnfb.png'
          alt='Nombre de la empresa'
          style={{ width: 100 }}
          className='col-3'
        />
        <p className='col-9'>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick} variant='outline-warning'>
          Postular
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
