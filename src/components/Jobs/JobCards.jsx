import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { activeJob } from '../../action/jobsAction';
import {
  ChooseTheJob,
  LogoBusiness,
  ContainerText,
  BusinessName,
  BusinessDescription,
} from './JobsStyled';
import ModalJobs from './ModalJobs';

const JobCards = ({ job }) => {
  const [allies, setAllies] = useState([]);
  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3004/allies`).then((result) => {
      const { data } = result;
      let arr = [];
      for (const row of data) for (const e of row) arr.push(e);
      setAllies(arr);
    });
  }, []);

  useEffect(() => {
    const matchCompany = allies.find((allie) => allie.name === job.name);
    setCompanyInfo(matchCompany);
  }, [allies, job]);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(activeJob(job));
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <ChooseTheJob onClick={() => setModalShow(true)}>
        {allies.length > 0 && companyInfo && (
          <LogoBusiness
            src={companyInfo.image}
            alt={job.name}
            onClick={handleClick}
          />
        )}
        <ContainerText>
          <BusinessName>{job.jobName}</BusinessName>
          <BusinessDescription>{job.description}</BusinessDescription>
        </ContainerText>
      </ChooseTheJob>
      <ModalJobs
        show={modalShow}
        onHide={() => setModalShow(false)}
        job={job}
        companyInfo={companyInfo}
      />
    </>
  );
};

export default JobCards;
