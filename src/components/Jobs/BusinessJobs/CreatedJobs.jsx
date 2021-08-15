import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
  CreatedJobsContainer,
  TitlePages,
  NoJobsImgContainer,
  NoJobsImg,
  ActionIcon,
} from '../JobsStyled';

const CreatedJobs = () => {
  const { jobs } = useSelector((state) => state.jobs);
  const { id } = useSelector((state) => state.login);
  const createdJobs = jobs.filter((element) => element.idBusiness === id);
  return (
    <CreatedJobsContainer>
      <TitlePages className='mb-3'>Vacantes creadas</TitlePages>
      {createdJobs.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Nombre del cargo</th>
              <th>Ciudad</th>
              <th>Fecha de publicación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {createdJobs.map((job) => (
              <tr key={job.id}>
                <td>{job.jobName}</td>
                <td>{job.city}</td>
                <td>{job.updateDate}</td>
                <td>
                  <div>
                    <ActionIcon className='bi bi-pencil-square fs-5'></ActionIcon>
                    <ActionIcon className='bi bi-x-square ms-1 fs-5'></ActionIcon>
                  </div>
                </td>
              </tr>
            ))}
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
