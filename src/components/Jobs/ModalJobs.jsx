import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyVerticallyCenteredModal = (props) => {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <img src='https://i.imgur.com/jFJEnfb.png' 
              alt='Nombre de la empresa' 
              style={{width: 100}}/>
            <h4>Nombre de la empresa</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning">Postular</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default MyVerticallyCenteredModal;

