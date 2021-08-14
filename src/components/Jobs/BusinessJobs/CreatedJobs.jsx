import React from 'react';
import { Table } from 'react-bootstrap';
import {
  CreatedJobsContainer,
  TitlePages,
  NoJobsImgContainer,
  NoJobsImg,
} from '../JobsStyled';

const CreatedJobs = () => {
  const showTable = false;
  return (
    <CreatedJobsContainer>
      <TitlePages className='mb-3'>Vacantes creadas</TitlePages>
      {showTable ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Nombre del cargo</th>
              <th>Ciudad</th>
              <th>Fecha de publicación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Larry the Bird</td>
              <td>sdfsd</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <NoJobsImgContainer>
          <NoJobsImg
            src='https://i.imgur.com/Tdd2vgh.png'
            alt='No hay vacantes agregadas'
          />
          <span className='text-muted'>No hay vacantes creadas</span>
        </NoJobsImgContainer>
      )}
    </CreatedJobsContainer>
  );
};

export default CreatedJobs;
