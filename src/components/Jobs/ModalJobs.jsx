import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ProfileEdit } from '../Profile/ProfileStyled';
import { DescriptionJobTop } from './JobsStyled';

const MyVerticallyCenteredModal = (props) => {

  const history = useHistory();
    const handleEdit = () =>{
        history.push("/editar-empleo");
    }

  const handleClick = () => {
    props.onHide();
    Swal.fire({
      title: 'Exitos!',
      text: 'Tu Hoja de vida ha sido enviada',
      icon: 'success',
      confirmButtonText: 'me encanta'
    }); 
    
  }
  const {job} = props

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          {
            job && (
              <Modal.Title id="contained-modal-title-vcenter">
                <h4 className=''>{job.jobName}</h4>
                <DescriptionJobTop>{job.type} | {job.city} </DescriptionJobTop> 
              </Modal.Title>  
            )
          }                    
        </Modal.Header>
        <Modal.Body className='row'>
          {
            job && (
              <div className='col-3'>
                <img src='' 
                  alt='Nombre de la empresa' 
                  style={{width: 100}}
                />
                <DescriptionJobTop className="m-3">{job.updateDate}</DescriptionJobTop>
                <DescriptionJobTop className="m-3">{job.salary}</DescriptionJobTop>
                <DescriptionJobTop className="m-3">{job.workDay}</DescriptionJobTop>
              </div>              
            )}
              {
                job && (
                  <div className='col-9'>
                    <h4>Descripción</h4>
                    <p>
                      {job.description}
                    </p>
                    <h4>Requisitos</h4>
                    <p>
                      {job.requirements}             
                    </p>                    
                  </div>
                )
              }    
          <ProfileEdit
            onClick={handleEdit}
          >
            <p>Editar Empleo</p>
          </ProfileEdit>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClick} variant="outline-warning">Postular</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default MyVerticallyCenteredModal;
