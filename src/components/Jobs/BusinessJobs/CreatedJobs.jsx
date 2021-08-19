import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { activeJob, startDeletingJob } from '../../../action/jobsAction';
import {
  CreatedJobsContainer,
  TitlePages,
  NoJobsImgContainer,
  NoJobsImg,
  ActionIcon,
  CandidatesBtn,
} from '../JobsStyled';

const CreatedJobs = ({ setShowCandidates, setSelectedJob }) => {
  const { jobs } = useSelector((state) => state.jobs);
  const { id } = useSelector((state) => state.login);
  const createdJobs = jobs.filter((element) => element.idBusiness === id);

  const handleClick = (jobId) => {
    setShowCandidates(true);
    setSelectedJob(jobId);
  };

  const dispatch = useDispatch();

  const handleEdit = (job) => {
    const { id: selectedId, ...selectedJob } = job;

    dispatch(activeJob(selectedId, selectedJob));
  };

  const handleDelete = (id) => {
    dispatch(startDeletingJob(id));
  };

  return (
    <CreatedJobsContainer>
      <TitlePages className='mb-3'>Vacantes creadas</TitlePages>
      {createdJobs.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr className='text-center'>
              <th>Nombre del cargo</th>
              <th>Ciudad</th>
              <th>Fecha de publicación</th>
              <th>Candidatos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {createdJobs.map((job) => (
              <tr key={job.id} className='text-center'>
                <td>{job.jobName}</td>
                <td>{job.city}</td>
                <td>{job.updateDate}</td>
                <td>
                  <CandidatesBtn onClick={() => handleClick(job.id)}>
                    ver
                  </CandidatesBtn>
                </td>
                <td>
                  <div>
                    <ActionIcon
                      className='bi bi-pencil-square fs-5'
                      onClick={() => handleEdit(job)}
                    ></ActionIcon>
                    <ActionIcon
                      className='bi bi-x-square ms-1 fs-5'
                      onClick={() => handleDelete(job.id)}
                    ></ActionIcon>
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
