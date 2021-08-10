import React, { useState } from 'react';
import {
  ChooseTheJob,
  LogoBusiness,
  ContainerText,
  BusinessName,
  BusinessDescription,
} from './JobsStyled';
import MyVerticallyCenteredModal from './ModalJobs';

const JobCards = ({job}) => {

  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <>
      <ChooseTheJob onClick={() => setModalShow(true)}>
        <LogoBusiness src='' alt={job.name} />
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
