import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ArrowBack } from '../../Join/JoinStyled';
import { CandidateRow, CandidatesContainer, TitlePages } from '../JobsStyled';
import CandidateDetail from './CandidateDetail';

const Candidates = ({ setShowCandidates, selectedJob }) => {
  const [filterCandidates, setfilterCandidates] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState({});

  const handleClose = () => {
    setShowCandidates(false);
  };

  const { candidates } = useSelector((state) => state.candidates);

  useEffect(() => {
    const filterCand = candidates.filter(
      (candidate) => candidate.jobId === selectedJob
    );
    setfilterCandidates(filterCand);
  }, [selectedJob, candidates]);

  const handleShowDetail = (profile) => {
    setModalShow(true);
    setSelectedCandidate(profile);
  };

  return (
    <>
      <ArrowBack
        onClick={handleClose}
        className='bi bi-arrow-left-circle ms-5'
      ></ArrowBack>
      <CandidatesContainer>
        <TitlePages className='mb-3'>Candidatos</TitlePages>
        {filterCandidates.length > 0 ? (
          <Table striped bordered hover responsive className='mt-3'>
            <thead>
              <tr className='text-center'>
                <th>Nombre del candidato</th>
                <th>Profesión</th>
                <th>Ciudad</th>
                <th>Fecha de postulación</th>
              </tr>
            </thead>
            <tbody>
              {filterCandidates.map((candidate) => (
                <CandidateRow
                  key={candidate.id}
                  className='text-center'
                  onClick={() => handleShowDetail(candidate.profile)}
                >
                  <td>{candidate.profile.name}</td>
                  <td>{candidate.profile.profession}</td>
                  <td>{candidate.profile.city}</td>
                  <td>Fecha de postulación</td>
                </CandidateRow>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className='d-flex flex-column justify-content-center align-items-center p-5 w-100'>
            <img
              className='img-fluid'
              src='https://i.imgur.com/aiFNNrn.png'
              alt='Aún no hay candidatos postulados'
            />
            <span>Aún no hay candidatos postulados</span>
          </div>
        )}
      </CandidatesContainer>
      <CandidateDetail
        selectedCandidate={selectedCandidate}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Candidates;
