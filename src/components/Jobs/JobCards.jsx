import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { activeJob } from '../../action/jobsAction';
import {
  ChooseTheJob,
  LogoBusiness,
  ContainerText,
  BusinessName,
  BusinessDescription,
} from './JobsStyled';
import MyVerticallyCenteredModal from './ModalJobs';

const JobCards = ({job}) => {

  const dispatch = useDispatch();
  const handleClick = () =>{
    dispatch(
      activeJob(job)
    )
  }

  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <>
      <ChooseTheJob onClick={() => setModalShow(true)}>
        <LogoBusiness src='' alt={job.name} onClick={handleClick}/>
        <ContainerText>
          <BusinessName>{job.name}</BusinessName>
          <BusinessDescription>
            {job.description}
          </BusinessDescription>
        </ContainerText>
      </ChooseTheJob>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}  
        job={job}
      />
    </>
  );
};

export default JobCards;
