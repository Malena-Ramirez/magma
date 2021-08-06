import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { DescriptionJobTop } from "./JobsStyled";

const MyVerticallyCenteredModal = (props) => {

  const handleClick = (props) =>{

    Swal.fire({
      title: 'Exitos!',
      text: 'Tu Hoja de vida ha sido enviada',
      icon: 'success',
      confirmButtonText: 'me encanta'
    }); 
    
  }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4 className=''>Nombre de la empresa</h4>
            <DescriptionJobTop>Remoto/Presencial | Colombia, Bogotá </DescriptionJobTop>                   
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='row'>
          <div className='col-3'>
              <img src='https://i.imgur.com/jFJEnfb.png' 
                alt='Nombre de la empresa' 
                style={{width: 100}}
              />
            <DescriptionJobTop className="m-3">Publicado hace 55 min</DescriptionJobTop>
            <DescriptionJobTop className="m-3">3.000.000 / 4.500.000</DescriptionJobTop>
            <DescriptionJobTop className="m-3">Jornada completa</DescriptionJobTop>
          </div>
          <div className='col-9'>
            <h4>Descripción</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
            <h4>Requisitos</h4>
            <p>
              -Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam.              
            </p>
            <p>
              -Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam.              
            </p>
            <p>
              -Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam.              
            </p>
            <p>
              -Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam.              
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClick} variant="outline-warning">Postular</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default MyVerticallyCenteredModal;